
function UserProfileCard ({user, theme, actions}) {
 return (
    <div className={`p-6 rounded-lg shadow-md ${theme.background} ${theme.text}`}>
        <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full mb-4" />
        <span>{user.role}</span>
        {user.stats && (
            <div className="flex gap-4">{Object.entries(user.stats).map(([key, value]) => (
                <div key={key}>
                    <div>{value}</div>
                    <div className="text-sm">{key}</div> 
                </div> 
            ))}</div>
        )}
        <h3 className="text-xl font-bold mt-2 mb-1">{user.name}, {user.age}</h3>
        <p className="mb-4">{user.email}</p>
        <div className="flex justify-end gap-3">
            <button className={actions.primary.className} onClick={actions.primary.onClick}>{actions.primary.label}</button>
            <button className={actions.secondary.className} onClick={actions.secondary.onClick}>{actions.secondary.label}</button>
        </div>
    </div>
 )
}
const ComplexProps = () => {
    const users = [
        {
            user: {
                name: "John Doe", age: 30,
                email: "john.doe@example.com", 
                avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=John%20Doe",
                role: "Admin", 
                status: "Active",
                stats: {posts: 120, followers: 300, following: 180}
            },
            theme: {background: "bg-gradient-to-r from-blue-500 to-purple-600", text: "text-white"},
            actions: {
              primary: {label: "Follow", onClick: () => alert("Followed John Doe"), className: "bg-white text-blue-600 hover:bg-gray-100 rounded-md px-4 py-2"},
              secondary: {label: "Message", onClick: () => alert("Message sent to John Doe") , className: "bg-transparent border border-white text-white hover:bg-white hover:text-blue-600 rounded-md px-4 py-2"}
            },
        },
        {
            user: {
                name: "Jane Smith", age: 28,
                email: "jane.smith@example.com",
                avatar: "https://api.dicebear.com/9.x/lorelei/svg?seed=Jane%20Smith",
                role: "User", 
                status: "Offline",
                stats: {posts: 80, followers: 150, following: 200}
            },
            theme: {background: "bg-gradient-to-r from-green-400 to-blue-500", text: "text-white"},
            actions: {
              primary: {label: "Follow", onClick: () => alert("Followed Jane Smith"), className: "bg-white text-green-600 hover:bg-gray-100 rounded-md px-4 py-2"},
              secondary: {label: "Message", onClick: () => alert("Message sent to Jane Smith") , className: "bg-transparent border border-white text-white hover:bg-white hover:text-green-600 rounded-md px-4 py-2"}
            },
        }
    ]
  return (
    <div className="space-y-4">
        <div>
            <h3>User Profile Card</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {users.map((userDate, index) => (
                    <UserProfileCard key={index} {...userDate} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default ComplexProps