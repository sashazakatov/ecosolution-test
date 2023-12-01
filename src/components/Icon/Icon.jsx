import sprite from 'Icons/sprite.svg';

const Icon = ({ width, height, id}) => { 
    return (
        <svg width={width} height={height} >
            <use href={sprite + '#' + id }></use>
        </svg>
    );
}

export default Icon;