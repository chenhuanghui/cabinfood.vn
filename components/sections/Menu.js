import Link from 'next/link'

class Menu extends React.Component {
	render() {
		const { title, href } = this.props

		return (
			<li>
				<a href={href} className="ls0">
				
                    <div>{title}</div>
                </a>
			</li>
			// <div>
			// 	<li><a href="#" className="ls0"><div>Câu chuyện</div></a></li>
			// 				<li><a href="#" className="ls0"><div>Tư vấn</div></a></li>
			// 				<li><a href="#" className="ls0" data-scrollto="#footer" data-highlight="yellow" data-speed="1200"><div>Liên hệ</div></a></li>
			// </div>
							
		)
	}
}

export default Menu
