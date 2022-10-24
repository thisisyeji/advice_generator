import AdviceBox from './components/AdviceBox';
import AdviceContent from './components/AdviceContent';
import AdviceBtn from './components/AdviceBtn';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
* {
box-sizing: border-box;
}

body {
  line-height: 1;
  width: 100%;
  height: 100vh;
  background: hsl(218, 23%, 16%);
	font-family: 'Manrope', sans-serif;
  font-weight: 800;

	display: flex;
	justify-content: center;
	align-items: center;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`;

function App() {
	const [advice, setAdvice] = useState('Click the dice 🎲!');
	const [id, setId] = useState('');

	const getAdvice = async () => {
		const res = await axios.get('https://api.adviceslip.com/advice');
		setAdvice(res.data.slip.advice);
		setId(res.data.slip.id);
	};

	const onUpdate = () => {
		getAdvice();
	};

	return (
		<>
			<GlobalStyle />
			<AdviceBox>
				<AdviceContent advice={advice} id={id} />
				<AdviceBtn onUpdate={onUpdate} />
			</AdviceBox>
		</>
	);
}

export default App;
