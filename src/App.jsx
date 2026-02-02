
import BasicProps from './components/BasicProps'
import RefProps from './components/RefProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import ThemeToggler from './components/ThemeToggler'

function Navigation () {
  const isDark = true 
  const sections = [
    {id: "basic", label: "Basic Props", icon: "⚙️"},
    {id: "ref", label: "Ref Props", icon: "📌"},
    {id: "children", label: "Children Props", icon: "🧷"},
    {id: "complex", label: "Complex Props", icon: "🧩"},
    {id: "theme", label: "Theme Toggler", icon: "🎨"},
  ]
  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div>
        <div className='flex flex-row justify-center'>
          {sections.map((section) => (
            <button key={section.id} className="p-2 m-1 bg-blue-600 rounded-md font-medium hover:bg-blue-700">
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

function AppContent () {
    const isDark = true 
  return (
    <div className={`min-h-screen bg-gray-900 text-white`}>
      <Navigation />
      <div className='container mx-auto px-4 py-8 '>
      
        <header className=''>
          <h1 className='text-3xl font-bold text-center'>React Props explained.</h1>
          <p className='text-center text-sm'>A Comprehensive Guide to Understanding React Props</p>
        </header>

        <div className='space-y-8 mt-4'>
          <div id="basic" className='scroll-mt-200'>     
            <BasicProps />
          </div>

          <div id="ref" className='scroll-mt-200'>
            <RefProps />
          </div>

          <div id="children" className='scroll-mt-200'>
            <ChildrenProps />
          </div>

          <div id="complex" className='scroll-mt-200'>
            <ComplexProps />
          </div>

          <div id="theme" className='scroll-mt-200'>
            <ThemeToggler />
          </div>
        </div>

        {/* footer */}
        <footer className={`mt-16 text-center transition-colors ${isDark ? 'text-white' : 'bg-gray-200 text-black'}`}>
          <p className='text-center mt-8'>&copy; 2024 React Props Guide </p>
        </footer>
      </div>
    </div>
  )
}
function App() {

  return (
    <AppContent />
  )
}

export default App
