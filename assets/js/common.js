$("#nav").html(`
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <a class="navbar-brand" href="./"><img src="./assets/img/logo.png" alt="Logo Copa 2022" width="100px"></a>
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