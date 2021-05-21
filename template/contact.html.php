<section class="mr-auto ml-auto">
    <div class="container">
        <div class="row pb-3 text-center">
            <h1 class="col-12 anton">CONTACTEZ-moi</h1>
        </div>
        <div id="alert">
            <!-- Ici s'afficheront les messages d'alertes -->
        </div>
        <div id="contact-form" class="row contact">
            <div class="col-12 col-md-4">
                <div class=" text-center text-md-right">
                    <h3>Quentin Moneger</h3>
                    <p class=" mb-0">
                        3, rue montmorency  
                    </p>
                    <p class=" mb-0">
                        31200, France
                    </p>
                    <p class="reverse mb-0">
                        regenom.nitneuq
                    </p>
                    <p class="mb-0">
                        @protonmail.com 
                    </p>
                    <p class="reverse mb-0">
                        98 46 81 99 60 léT 
                    </p>
                </div>
                <div class="contact text-center text-md-right">
                    <a href="https://github.com/quentinmoneger/" target="_blank"><i class="fab fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/moneger-quentin-4004691a1/" target="_blank"><i class="fab fa-linkedin fa-2x"></i></a>
                </div>
            </div>
            <div class="col-12 col-md-8 mt-2 p-0 px-1"> 
                <form id="form" >
                    <div class="form-group">
                        <input class="form-control" name="name" id="name" placeholder="Nom" value="<?= !empty($safe['name'])  ? $safe['name'] : '' ?>">
                    </div>
                    <div class="form-group">
                        <input type="email" name="email" class="form-control" id="email" placeholder="E-mail" value="<?= !empty($safe['email'])  ? $safe['email'] : '' ?>">
                    </div>
                    <div class="form-group">
                        <input class="form-control" name="phone" id="phone" placeholder="Téléphone" value="<?= !empty($safe['phone'])  ? $safe['phone'] : '' ?>">
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" name="message" id="textarea" rows="4"
                            placeholder="Rédigez votre message ici..."><?= !empty($safe['message'])  ? $safe['message'] : '' ?></textarea>
                    </div>                   
                </form>
                <button id="send" class="float-right btn border">Envoyer</button>
            </div>
        </div>
        <div class="row mt-3 mb-3" id="map">
            <!-- Ici s'affichera la carte -->
        </div>
    </div>
</section>
