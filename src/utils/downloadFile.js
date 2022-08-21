export const downloadFile = (url, name) => {
  if (!url) return;
  const a = document.createElement('a');
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      a.href = URL.createObjectURL(blob);
      console.log(a.href);
      a.download = name ?? '';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();

      //在资源下载完成后 清除 占用的缓存资源
      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    });
};
