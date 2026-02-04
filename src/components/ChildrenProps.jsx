
function Card ({ children, title, color="blue" }) {
    const colorClasses = {
        blue: 'border-blue-500 bg-blue-500',
        green: 'border-green-500 bg-green-500',  
        red: 'border-red-500 bg-red-500',
        purple: 'border-purple-500 bg-purple-500', 
    }
    return (
        <div className={`border-l-4 ${colorClasses[color]} p-6 rounded-lg shadow-md`}>{title && <h3 className="text-xl font-bold mb-3 text-gray-600">{title}</h3>}
        <div className="text-gray-700">{children}</div>
        </div>
    ) 
}

function Container ({ children, layout = "vertical" }) {
    const layoutClasses = {
        vertical: 'flex flex-col space-y-4',
        horizontal: 'flex flex-row flex-wrap gap-4',
        grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    }

    return <div className={layoutClasses[layout]}>{children}</div>
}

const ChildrenProps = () => {
  return (
    <section className="p-8 bg-white rounded-xl shadow-lg text-black">
        <h2>Children Prop</h2>
        <p>The children prop in React allows you to pass components or elements as the content of a parent component. This is useful for creating reusable and flexible components.</p>
        <div className="space-y-6">
            <div>
                <h3>This is a card component with children</h3>
                <Container layout="grid">
                    <Card title="User Profile" color="blue">
                        <p className="mb-2"><strong>Name:</strong> John Doe</p>
                        <p className="mb-2"><strong>Email:</strong> john.doe@example.com</p>
                        <p className="mb-2"><strong>Role:</strong> Software Engineer</p>
                    </Card>

                    <Card title="Statistics" color="green">
                        <p className="mb-2"><strong>Name:</strong> John Doe</p> 
                        <p className="mb-2"><strong>Email:</strong> john.doe@example.com</p>
                        <p className="mb-2"><strong>Role:</strong> Software Engineer</p>
                    </Card>
                </Container>
            </div>
        </div>
    </section>
  )
}
   
export default ChildrenProps