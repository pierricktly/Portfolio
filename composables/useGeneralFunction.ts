export function useGeneralFunction() {
  const copyEmail = () => {
    const email = "pierrick.tly+portfolio@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard");
  };

  const downloadCVFromFile = () => {
    const link = document.createElement("a");
    link.href = "/CV_FRONTEND_TAILY_PIERRICK.pdf";
    link.download = "CV_FRONTEND_TAILY_PIERRICK.pdf";
    link.click();
  };

  return {
    copyEmail,
    downloadCVFromFile,
  }
}