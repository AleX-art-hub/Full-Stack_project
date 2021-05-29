function HeroList (props){
    const{
        hero: {id, nickname, realName, originDescription, catchPhrase, superpowers},
    } = props
    return(<li key={id}>
        nickname: {nickname},
    </li>)
}

function HeroList(){
    
}