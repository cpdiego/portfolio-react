import DiegoHome from '../../assets/diego-home.png';
import Header from '../../components/Header';
import { Container, ContainerImage, ContainerInfo } from './styles';

function Home() {
	return (
		<>
			<Header />
			<Container>
				<ContainerImage>
					<img src={DiegoHome} alt="imagem-diego-home" />
				</ContainerImage>
				<ContainerInfo>
					<h1>Diego Castro</h1>
					<h3>Desenvolvedor Full Stack</h3>
					<p>
						Do conceito ao deploy: crio experiências web completas que unem
						design inteligente e lógica robusta.
					</p>
				</ContainerInfo>
			</Container>
		</>
	);
}

export default Home;
