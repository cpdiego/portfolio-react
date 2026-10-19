import Logo from '../../assets/logo-dc-sistemas.png';
import { ContainerHeader, Li, Menu } from './styles';

function Header() {
	return (
		<ContainerHeader>
			<a href="#home">
				<img src={Logo} alt="logo-dc-sistemas" />
			</a>

			<Menu>
				<Li isActive={'#home'}>
					<a href="#home">Home</a>
				</Li>
				<Li isActive={'#sobre'}>
					<a href="#sobre">Sobre</a>
				</Li>
				<Li isActive={'#projetos'}>
					<a href="#projetos">Projetos</a>
				</Li>
				<Li isActive={'#contato'}>
					<a href="#contato">Contato</a>
				</Li>
			</Menu>
		</ContainerHeader>
	);
}

export default Header;
