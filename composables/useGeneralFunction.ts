export function useGeneralFunction() {
  const { locale } = useI18n()

  const copyEmail = () => {
    const email = 'pierrick.tly+portfolio@gmail.com'
    navigator.clipboard.writeText(email)
    if (locale.value === 'en') alert('Email copied!')
    else alert('Email copié !')
  }

  const downloadCVFromFile = () => {
    const link = document.createElement('a')

    if (locale.value === 'en') {
      link.href = '/CV_FRONTEND_TAILY_PIERRICK_EN.pdf'
      link.download = 'CV_FRONTEND_TAILY_PIERRICK_EN.pdf'
    } else {
      link.href = '/CV_FRONTEND_TAILY_PIERRICK.pdf'
      link.download = 'CV_FRONTEND_TAILY_PIERRICK.pdf'
    }
    link.click()
  }

  return {
    copyEmail,
    downloadCVFromFile,
  }
}
