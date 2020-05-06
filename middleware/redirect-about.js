export default function ({ route, redirect }) {
  if (!(route.path === '/about' || route.path === '/es/about' || route.path === '/en/about')) {
    return redirect('/about')
  }
}
