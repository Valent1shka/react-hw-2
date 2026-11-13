import styles from './Button.module.css'

export default function Button () {
    const btnConsole = () => {
        console.log('All done!')
    }

    return <button onClick={btnConsole}>Click me!</button>
}