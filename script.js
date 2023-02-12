var flexDirectionProperties = ['row', 'row-reverse', 'column', 'column-reverse'];
function changeFlexContainerDirection() {
    var flexContainer = document.getElementById("flex-container");
    var counter = flexDirectionProperties.indexOf(getComputedStyle(flexContainer).getPropertyValue('flex-direction')) + 1;
    
    if (counter == flexDirectionProperties) {
        counter = 0;
    }

    flexContainer.style.setProperty('flex-direction', flexDirectionProperties[counter]);
    document.getElementById('flex-direction-value').innerText = flexDirectionProperties[counter == null ? 0 : counter];
}

var flexWrapProperties = ['nowrap', 'wrap', 'wrap-reverse'];
function changeFlexContainerWrap() {
    var flexContainer = document.getElementById("flex-container");
    var counter = flexWrapProperties.indexOf(getComputedStyle(flexContainer).getPropertyValue('flex-wrap')) + 1;
    
    if (counter == flexWrapProperties.length) {
        counter = 0;
    }

    flexContainer.style.setProperty('flex-wrap', flexWrapProperties[counter]);
    document.getElementById('flex-wrap-value').innerText = flexWrapProperties[counter];
}

var justifyContentProperties = ['center', 'start', 'end', 'flex-start', 'flex-end', 'left', 'right'];
function changeFlexContainerJustifyContent() {
    var flexContainer = document.getElementById("flex-container");
    var counter = justifyContentProperties.indexOf(getComputedStyle(flexContainer).getPropertyValue('justify-content')) + 1;
    
    if (counter == justifyContentProperties.length) {
        counter = 0;
    }

    flexContainer.style.setProperty('justify-content', justifyContentProperties[counter]);
    document.getElementById('justify-content-value').innerText = justifyContentProperties[counter];
}

var alignItemsProperties = ['normal', 'center', 'start', 'end', 'flex-start', 'flex-end'];
function changeFlexContainerAlignItems() {
    var flexContainer = document.getElementById("flex-container");
    var counter = alignItemsProperties.indexOf(getComputedStyle(flexContainer).getPropertyValue('align-items')) + 1;
    
    if (counter == alignItemsProperties.length) {
        counter = 0;
    }

    flexContainer.style.setProperty('align-items', alignItemsProperties[counter]);
    document.getElementById('align-items-value').innerText = alignItemsProperties[counter];
}

var alignContentProperties = ['normal', 'center', 'start', 'end', 'flex-start', 'flex-end'];
function changeFlexContainerAlignContent() {
    var flexContainer = document.getElementById("flex-container");
    var counter = alignItemsProperties.indexOf(getComputedStyle(flexContainer).getPropertyValue('align-content')) + 1;
    
    if (counter == alignContentProperties.length) {
        counter = 0;
    }

    flexContainer.style.setProperty('align-content', alignContentProperties[counter]);
    document.getElementById('align-content-value').innerText = alignContentProperties[counter];
}