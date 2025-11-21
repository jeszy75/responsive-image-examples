const screenSizeElement = document.getElementById("screenSize");
if (screenSizeElement) {
    const updateScreenSize = () => {
        screenSizeElement.textContent = `${screen.width}px \u00d7 ${screen.height}px`;
    };
    updateScreenSize();
    screen.orientation.addEventListener("change", updateScreenSize);
}

const devicePixelRatioElement = document.getElementById("devicePixelRatio");
if (devicePixelRatioElement) {
    const updateDevicePixelRatio = () => {
        devicePixelRatioElement.textContent = window.devicePixelRatio;
    };
    updateDevicePixelRatio();
    window.addEventListener("resize", updateDevicePixelRatio);
}

const layoutViewportSizeElement = document.getElementById("layoutViewportSize");
if (layoutViewportSizeElement) {
    const updateLayoutViewportSize = () => {
        layoutViewportSizeElement.textContent = `${window.innerWidth}px \u00d7 ${window.innerHeight}px`;
    };
    updateLayoutViewportSize();
    window.addEventListener("resize", updateLayoutViewportSize);
}

const visualViewportScaleElement = document.getElementById("visualViewportScale");
const visualViewportSizeElement = document.getElementById("visualViewportSize");
if (visualViewportScaleElement && visualViewportSizeElement) {
    const updateVisualViewport = () => {
        visualViewportScaleElement.textContent = window.visualViewport.scale;
        visualViewportSizeElement.textContent = `${Math.round(window.visualViewport.width)}px \u00d7 ${Math.round(window.visualViewport.height)}px`;
    };
    updateVisualViewport();
    window.visualViewport.addEventListener("resize", updateVisualViewport);
}

const imageSourceElement = document.getElementById("imageSource");
if (imageSourceElement) {
    const imgElement = document.querySelector("img");
    const updateImageSource = () => {
        imageSourceElement.textContent = imgElement.currentSrc.split("/").pop();
    };
    updateImageSource();
    imgElement.addEventListener("load", updateImageSource);
}