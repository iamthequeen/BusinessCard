export default function Info({url}) {
    return (
        <div className="info">
        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" alt="a girl smiling" className="profile-img" />
        <h1 className="title">Laura Smith</h1>
        <h2 className="subtitle">Frontend Developer</h2>
        <a href={url} className="site">laurasmith.website</a>
        </div>
    )
}