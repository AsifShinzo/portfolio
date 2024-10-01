export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <footer className={`${isDarkMode ? 'bg-black bg-opacity-50' : 'bg-white bg-opacity-50'} py-4 px-6 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
      <p className="text-sm">&copy; 2023 Asif Shaikh. All rights reserved.</p>
    </footer>
  )
}