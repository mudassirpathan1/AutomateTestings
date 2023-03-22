
import {render, screen} from '@testing-library/react';
import Greeting from "./Greetings";
describe('Greeting component', () =>{



test('renders Hello World as a text ', ()=>{

    render (<Greeting/>);

    const helloWorldElement= screen.getByText('Hello world!',{exact: false})

    expect(helloWorldElement).toBeInTheDocument();
});
});