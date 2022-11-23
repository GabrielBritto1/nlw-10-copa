$("#nav").html(`
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a class="navbar-brand" href="./index.html"><img src="./assets/img/logo.png" alt="Logo Copa 2022" width="100px"></a>
        <button class=" navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="./grupos.html">Grupos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./partidas.html">Partidas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./partidas_hoje.html">Partidas Hoje</a>
                </li>
            </ul>
        </div>
    </nav>
`)

const translateFlag = {
    'Argentina': 'Argentina',
    'Australia': 'Australia',
    'Belgium': 'Belgica',
    'Brazil': 'Brasil',
    'Cameroon': 'Camaroes',
    'Canada': 'Canada',
    'Costa Rica': 'Costa Rica',
    'Croatia': 'Croacia',
    'Denmark': 'Dinamarca',
    'Ecuador': 'Equador',
    'England': 'Inglaterra',
    'France': 'Franca',
    'Germany': 'Alemanha',
    'Ghana': 'Gana',
    'Iran': 'Ira',
    'Japan': 'Japao',
    'Korea Republic': 'Coreia do Sul',
    'Mexico': 'Mexico',
    'Morocco': 'Marrocos',
    'Netherlands': 'Holanda',
    'Poland': 'Polonia',
    'Portugal': 'Portugal',
    'Qatar': 'Catar',
    'Saudi Arabia': 'Arabia Saudita',
    'Senegal': 'Senegal',
    'Serbia': 'Servia',
    'Spain': 'Espanha',
    'Switzerland': 'Suica',
    'Tunisia': 'Tunisia',
    'Uruguay': 'Uruguai',
    'USA': 'EUA',
    'Wales': 'Gales',
}