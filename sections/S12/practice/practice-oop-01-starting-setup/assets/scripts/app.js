class Component {
  constructor(hostEleId, insertBefore = false) {
    if (hostEleId) this.hostEle = document.getElementById(hostEleId);
    else this.hostEle = document.body;
    this.insertBefore = insertBefore;
  }
  detach() {
    if (this.element) this.element.remove();
  }
  attach() {
    this.hostEle.insertAdjacentElement(
      this.insertBefore ? "beforebegin" : "beforeend",
      this.element
    );
  }
}

class ToolTip extends Component {
  constructor(closeNotifierFn) {
    super();
    this.closeNotifier = closeNotifierFn;
    this.create();
  }
  closeToolTip = () => {
    this.detach();
    this.closeNotifier();
  };
  create() {
    const tooltipEl = document.createElement("div");
    tooltipEl.classList.add("card");
    tooltipEl.textContent = 'CONTENT';

    tooltipEl.addEventListener("click", this.closeToolTip);
    this.element = tooltipEl;
  }
}

class DOMHelper {
  static clearEventListeners(element) {
    const clonedEl = element.cloneNode(true);
    element.replaceWith(clonedEl);
    return clonedEl;
  }
  static moveElement(elementId, newDestSelector) {
    const ele = document.getElementById(elementId);
    const destEle = document.querySelector(newDestSelector);
    destEle.append(ele);
  }
}

class ProjectItem {
  hasActiveToolTip = false;

  constructor(id, updatePrjListsFn, type) {
    this.id = id;
    this.updatePrjListsHandler = updatePrjListsFn;
    this.connectSwitchBtn(type);
    this.connectMoreInfoBtn();
  }

  connectSwitchBtn(type) {
    const projectItemEl = document.getElementById(this.id);
    let switchBtn = projectItemEl.querySelector("button:last-of-type");

    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === "active" ? "FINSIH" : "ACTIVATE";
    switchBtn.addEventListener(
      "click",
      this.updatePrjListsHandler.bind(null, this.id)
    );
  }

  connectMoreInfoBtn() {
    const projectItemEl = document.getElementById(this.id);
    const moreInfoBtn = projectItemEl.querySelector("button:first-of-type");
    moreInfoBtn.addEventListener("click", this.showMoreInfoHandler);
  }

  showMoreInfoHandler() {
    if (this.hasActiveToolTip) return;
    const tooltip = new ToolTip(() => {
      this.hasActiveToolTip = false;
    });
    tooltip.attach();
    this.hasActiveToolTip = true;
  }

  update(updatePrjListsFn, type) {
    this.updatePrjListsHandler = updatePrjListsFn;
    this.connectSwitchBtn(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    // console.log(prjItems);

    prjItems.forEach((pItem) => {
      this.projects.push(
        new ProjectItem(pItem.id, this.switchProject.bind(this), this.type)
      );
    });
  }

  setSwitchHandler(switchHandlerFn) {
    this.switchHandler = switchHandlerFn;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projId) {
    this.switchHandler(this.projects.find((p) => p.id === projId));

    const ind = this.projects.findIndex((p) => p.id === projId);
    this.projects.splice(ind, 1);
    // same as
    // this.projects = this.projects.filter(p => p.id !== projId);

    // we've removed project but now we have to add it to other projectList
    // we can't use this.addProject() 'cause it changes current projectList
    // so we use callback fns
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");

    activeProjectList.setSwitchHandler(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandler(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
