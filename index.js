const pathname = window.location.pathname

console.warn(pathname)
if (pathname.includes('aige')) {
  window.location.replace(`${window.location.origin}/aige.html`)
}

if (pathname.includes('kejian')) {
  window.location.replace(`${window.location.origin}/kejian.html`)
}
