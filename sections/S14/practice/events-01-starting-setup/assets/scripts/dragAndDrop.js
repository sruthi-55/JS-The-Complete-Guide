// to make elements draggable
// 1. Mark eles as draggable = true
// 2. Listen to dragstart event

// make areas where item can be dropped
// 3. Accept drop via 'dragenter' and 'dragover' events => preventDefault()
// 'dragenter' is optional. 'dragover'is mandatory
// dragover will also trigger for child eles - dragenter won't
// default is drop operation is canceled. So need to use preventDefault()

// 4. (Optional) Listen to dragleave event
// 5. Listen to drop event

// When you make an ele draggable you will get some visual feedback that looks like the user is really dragging the ele
// but it's not getting moved in DOM technically. you have to update the DOM programmatically using JS

// 6. (Optional)  Listen to dragend event
// always fired even if drop is cancelled (even if ele is dropped in invalid area)