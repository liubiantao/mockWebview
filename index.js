const pathname = window.location.pathname

if (pathname.includes('aige')) {
  window.location.replace(`${window.location.origin}/mockWebview/aige.html`)
}

if (pathname.includes('kejian')) {
  window.location.replace(`${window.location.origin}/mockWebview/kejian.html`)
}
