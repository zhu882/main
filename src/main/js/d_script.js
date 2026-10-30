function downloadExistingZip() {
    const zipFilePath = "path/to/your/file.zip";
    const element = document.createElement("a");
    element.href = zipFilePath;
    element.download = "example.zip";
    element.click();
}

// 绑定按钮点击事件
document.getElementById("download").addEventListener("click", downloadExistingZip);