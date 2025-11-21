let screenSizeElement = document.getElementById("screenSize");
if (screenSizeElement) {
    const updateScreenWidth = () => {
        screenSizeElement.textContent = `${screen.width}px \u00d7 ${screen.height}px`;
        screen.orientation.addEventListener("change", updateScreenWidth, { once: true });
    };
    updateScreenWidth();
}

let devicePixelRatioElement = document.getElementById("devicePixelRatio");
if (devicePixelRatioElement) {
    const updateDevicePixelRatio = () => {
        let dpr = window.devicePixelRatio;
        devicePixelRatioElement.textContent = dpr;
        matchMedia(`(resolution: ${dpr}dppx)`).addEventListener("change", updateDevicePixelRatio, { once: true });
    };
    updateDevicePixelRatio();
}

let layoutViewportSizeElement = document.getElementById("layoutViewportSize");
if (layoutViewportSizeElement) {
    const updateLayoutViewportSize = () => {
        layoutViewportSizeElement.textContent = `${window.innerWidth}px \u00d7 ${window.innerHeight}px`;
        window.addEventListener("resize", updateLayoutViewportSize, { once: true });
    };
    updateLayoutViewportSize();
}

let visualViewportScaleElement = document.getElementById("visualViewportScale");
let visualViewportSizeElement = document.getElementById("visualViewportSize");
if (visualViewportScaleElement && visualViewportSizeElement) {
    const updateVisualViewport = () => {
        visualViewportScaleElement.textContent = window.visualViewport.scale;
        visualViewportSizeElement.textContent = `${Math.round(window.visualViewport.width)}px \u00d7 ${Math.round(window.visualViewport.height)}px`;
        window.visualViewport.addEventListener("resize", updateVisualViewport, { once: true });
    };
    updateVisualViewport();
}

let imageSourceElement = document.getElementById("imageSource");
if (imageSourceElement) {
    let imgElement = document.querySelector("img");
    const updateImageSource = () => {
        let src = imgElement.currentSrc;
        imageSourceElement.textContent = src.substring(src.lastIndexOf("/") + 1);
        imgElement.addEventListener("load", updateImageSource, { once: true });
    };
    updateImageSource();
}