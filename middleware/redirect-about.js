export default function ({ route, redirect }) {
  if (!(route.path.startsWith('/about') || route.path.startsWith('/es/about') || route.path.startsWith('/en/about'))) {
    return redirect('/about')
  }
}
