import { Badge } from 'badge-count';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Badge.echo({ value: inputValue })
}
