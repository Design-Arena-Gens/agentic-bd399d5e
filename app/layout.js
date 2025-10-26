export const metadata = {
  title: 'Realms of Eternity - Fantasy RPG Roguelite',
  description: 'Enter a world of endless adventure. Fight, die, rise again.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
