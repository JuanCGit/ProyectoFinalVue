<template>
    <div id="principal" class="containerInscripcion">

        <div class="well mb-4 text-muted border shadow" id="cuerpo">

            <form action="tratamientodeDatos.php" method="get" autocomplete="on" class="my-5 mx-5">

                <div v-if="esVisible"><!---->
                    <!-- DATOS PERSONALES -->
                    <fieldset class="border-top border-bottom border-danger border-2 px-3">
                    
                        <legend class="mt-2">Datos Personales</legend>
                        <div class="row">

                            <div class="col-md-5 form-floating mb-3 mt-3">
                                <input v-model="nombre" type="text" class="form-control border-0 border-start border-bottom border-2" id="nombre"
                                    placeholder="Escribe tu nombre" name="nomb" required>
                                <label for="nombre" class="ms-3">Nombre</label>
                            </div>

                            <div class="col-md-7 form-floating mt-3 mb-3">
                                <input v-model="apellidos" type="text" class="form-control border-0 border-start border-bottom border-2" id="apellido"
                                    placeholder="Escribe tus apellidos" name="apellido" required>
                                <label for="apellido" class="ms-3">Apellidos</label>
                            </div>

                        </div>

                        <div class="row">

                            <!-- DNI -->
                            <div class="col-md-4 col-lg-4 col-xl-4 form-floating mb-3 mt-4">
                                <input v-model="dni" type="text" class="form-control form-control-sm border-0 border-start border-bottom border-2"
                                    id="dni" placeholder="Escribe tu dni" name="dni" maxlength="9" required>
                                <label for="dni" class="ms-3">DNI</label>
                            </div>

                            <!-- Fecha Nacimiento -->
                            <div class="col-md-8 col-lg-8 col-xl-4 form-floating ps-3">       
                                <div class="row">
                                    <span class="ms-3 g-0">Fecha Nacimiento</span>

                                    <div class="col-sm-3 col-md-4 form-floating mb-2">
                                        <select v-model="dia" class="form-select border-0 border-start border-bottom border-2" id="dia" name="dia">
                                            <option disabled value="">D&#237;a</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                        <label for="dia" class="ms-3">Dia</label>
                                    </div>

                                    <div class="col-sm-5 col-md-4 form-floating mb-3">
                                        <select v-model="mes" class="form-select border-0 border-start border-bottom border-2" id="mes" name="mes">
                                            <option disabled value="">Mes</option>
                                            <option value="0">Enero</option>
                                            <option value="1">Febrero</option>
                                            <option value="2">Marzo</option>
                                            <option value="3">Abril</option>
                                            <option value="4">Mayo</option>
                                            <option value="5">Junio</option>
                                            <option value="6">Julio</option>
                                            <option value="7">Agosto</option>
                                            <option value="8">Septiembre</option>
                                            <option value="9">Octubre</option>
                                            <option value="10">Noviembre</option>
                                            <option value="11">Diciembre</option>
                                        </select>
                                        <label for="mes" class="ms-3">Mes</label>
                                    </div>

                                    <div class="col-sm-4 col-md-4 form-floating mb-3">
                                        <select v-model="año" class="form-select border-0 border-start border-bottom border-2" id="año" name="año">
                                            <option disabled value="">A&#241;o</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                            <option value="2020">2020</option>
                                            <option value="2019">2019</option>
                                            <option value="2018">2018</option>
                                            <option value="2017">2017</option>
                                            <option value="2016">2016</option>
                                            <option value="2015">2015</option>
                                            <option value="2014">2014</option>
                                            <option value="2013">2013</option>
                                            <option value="2012">2012</option>
                                            <option value="2011">2011</option>
                                            <option value="2010">2010</option>
                                            <option value="2009">2009</option>
                                            <option value="2008">2008</option>
                                            <option value="2007">2007</option>
                                            <option value="2006">2006</option>
                                            <option value="2005">2005</option>
                                            <option value="2004">2004</option>
                                            <option value="2003">2003</option>
                                            <option value="2002">2002</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                            <option value="1969">1969</option>
                                            <option value="1968">1968</option>
                                            <option value="1967">1967</option>
                                            <option value="1966">1966</option>
                                            <option value="1965">1965</option>
                                            <option value="1964">1964</option>
                                            <option value="1963">1963</option>
                                            <option value="1962">1962</option>
                                            <option value="1961">1961</option>
                                            <option value="1960">1960</option>
                                            <option value="1959">1959</option>
                                            <option value="1958">1958</option>
                                            <option value="1957">1957</option>
                                            <option value="1956">1956</option>
                                            <option value="1955">1955</option>
                                            <option value="1954">1954</option>
                                            <option value="1953">1953</option>
                                            <option value="1952">1952</option>
                                            <option value="1951">1951</option>
                                            <option value="1950">1950</option>
                                        </select>
                                        <label for="año" class="ms-3">Año</label>
                                    </div>
                                </div>
                            </div>
                            <!-- Div Género -->
                            <div class="col-lg-4 col-xl-4 form-floating">
                             
                                <div class="row">
                                    <span class="mb-3">Sexo</span>
                                    <!--Hombre-->
                                    <div class="col-sm-4 mb-2 form-floating">
                                        <button type="button" 
                                            class="btn btn-outline-secondary ms-1 border-0 border-start border-bottom border-2 hombre"
                                            :class="esHombre ? 'btn-outline-danger border-danger' : ''"
                                            @click="esHombre=!esHombre, esMujer=false, esOtros=false"
                                            id="hombre" name="sexo" value="h">Hombre
                                        </button>    
                                    </div>
                                    <!--Mujer-->
                                    <div class="col-sm-4 mb-2 form-floating">
                                        <button type="button"
                                            class="btn btn-outline-secondary ms-1 border-0 border-start border-bottom border-2 mujer"
                                            :class="esMujer ? 'btn-outline-danger border-danger' : ''"
                                            @click="esMujer=!esMujer, esHombre=false, esOtros=false"
                                            id="mujer" name="sexo" value="m">Mujer
                                        </button>
                                    </div>
                                    <!--Otros-->
                                    <div class="col-sm-4 mb-2 form-floating">
                                        <button type="button"
                                            class="btn btn-outline-secondary ms-1 border-0 border-start border-bottom border-2 otros"
                                            :class="esOtros ? 'btn-outline-danger border-danger' : ''"
                                            @click="esOtros=!esOtros, esHombre=false, esMujer=false"
                                            id="otros" name="sexo" value="o">Otros
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <!-- DATOS CONTACTO -->
                    <fieldset class="border-top border-bottom border-danger border-2 px-3">  
                        <legend class="mt-2">Datos de Contacto</legend>

                        <div class="row">
                            <!-- Direccion -->
                            <div class="col-8 form-floating mb-3 mt-3">
                                <input v-model="direccion" type="text" class="form-control form-control-sm border-0 border-start border-bottom border-2"
                                    id="direccion" placeholder="Escribe tu direccion" name="direccion">
                                <label for="direccion" class="ms-3">Dirección</label>
                            </div>
                            <!-- Codigo postal -->
                            <div class="col-4 form-floating mt-3 mb-3">
                                <input type="text" class="form-control border-0 border-start border-bottom border-2" id="cp"
                                    placeholder="Escribe tu codigo postal" name="codPostal" value="46007" maxlength="5">
                                <label for="cp" class="ms-3" size="5">C.P.</label>
                            </div>

                        </div>

                        <div class="row">
                            
                            <!-- Correo -->
                            <div class="col-md-6 form-floating mb-3 mt-3">
                                <input v-model="correo" type="email" class="form-control form-control-sm border-0 border-start border-bottom border-2"
                                    id="correo" placeholder="Escribe tu correo" name="correo">
                                <label for="correo" class="ms-3">Correo</label>
                            </div>
                            <!--Correo 2-->
                            <div class="col-md-6 form-floating mt-3 mb-3">
                                <input v-model="correo2" type="email" class="form-control border-0 border-start border-bottom border-2" id="correo2"
                                    placeholder="Verifica tu correo" name="correo2">
                                <label for="correo2" class="ms-3">Verificar correo</label>
                            </div>

                        </div>

                        <div class="row">
                        
                            <!-- Telefono -->
                            <div class="col-sm-5 form-floating mb-3 mt-3">
                                <input v-model="telefono" type="tel" class="form-control form-control-sm border-0 border-start border-bottom border-2"
                                    id="movil" placeholder="Escribe tu telefono" name="movil" maxlength="9">
                                <label for="movil" class="ms-3">Teléfono móvil</label>
                            </div>

                        </div>
                    </fieldset>

                    <!--BOTON PARA SIGUIENTE PARTE DEL FORMULARIO-->
                    <div class="my-3 mx-auto" style="width:118px">
                        <h4 @click="datosRellenados" class="btn btn-lg btn-outline-secondary" id="siguiente">
                            Siguiente
                        </h4>
                    </div>

                </div>

                <div v-else><!---->
                    <!-- CUOTA -->
                    <fieldset class="border-top border-bottom border-danger px-3 cuota" id="cuota">
                        <legend class="mt-2">Seleccione su cuota</legend>

                        <div class="row" id="cuotas">
                        
                            <span class="ms-3 g-0">Cuotas disponibles</span>
                            <!-- 1 mes -->
                            <div :class="mesSel ? 'seleccionada' : ''" class="col-md-4 col-lg-4 container mb-3 mt-3">

                                <h2>1 mes</h2>
                    
                                <button type="button" :class="mesSel ? 'seleccionada' : ''" class="btn btn-secondary" id="oferta1" data-bs-toggle="collapse" data-bs-target="#mes">Ver oferta</button>
                                <div id="mes" class="collapse" data-bs-parent="#cuotas">
                                    Precio de un mes
                                    <div id="precio">20,90 €</div>
                                    <div class="text-center">
                                        <dl>
                                            <dd>Pulsera incluida</dd>
                                            <dd>Acceso completo al centro</dd>
                                            <dd>Actividades dirigidas incluidas</dd>
                                        </dl>
                                    </div>
                                    <button type="button" 
                                            class="float-end btn btn-outline-secondary border-0 border-start border-bottom"
                                            :class="mesSel ? 'seleccionada' : ''"
                                            @click="mesSel=!mesSel, seisMesesSel=false, añoSel=false, cuotaSeleccionada(mesSel,'btnMes','btnSeisMeses','btnAño','oferta1')"
                                            id="btnMes" name="cuota" value="mes">Seleccionar
                                    </button>
                                </div>

                            </div>
                            <!-- 6 meses -->
                            <div :class="seisMesesSel ? 'seleccionada' : ''" class="col-md-4 col-lg-4 container mb-3 mt-3">

                                <h2>6 meses</h2>
                    
                                <button type="button" :class="seisMesesSel ? 'seleccionada' : ''" class="btn btn-secondary" id="oferta2" data-bs-toggle="collapse" data-bs-target="#seisMeses">Ver oferta</button>
                                <div id="seisMeses" class="collapse" data-bs-parent="#cuotas">
                                    Precio cuota de 6 meses
                                    <div id="precio">89,90 €</div>
                                    <div class="text-center">
                                        <dl>
                                            <dd>Pulsera + acceso con huella + matrícula incluidos</dd>
                                            <dd>Acceso completo al centro</dd>
                                            <dd>Actividades dirigidas incluidas</dd>
                                        </dl>
                                    </div>
                                    <button type="button" 
                                            class="float-end btn btn-outline-secondary ms-1 border-0 border-start border-bottom border-2 hombre"
                                            :class="seisMesesSel ? 'seleccionada' : ''"
                                            @click="seisMesesSel=!seisMesesSel, mesSel=false,añoSel=false, cuotaSeleccionada(seisMesesSel,'btnSeisMeses','btnMes','btnAño')"
                                            id="btnSeisMeses" name="cuota" value="seisMeses">Seleccionar
                                    </button>
                                </div>

                            </div>
                            <!-- 1 año -->
                            <div :class="añoSel ? 'seleccionada' : ''" class="col-md-4 col-lg-4 container mb-3 mt-3">

                                <h2>1 año</h2>
                    
                                <button type="button" :class="añoSel ? 'seleccionada' : ''" class="btn btn-secondary" id="oferta3" data-bs-toggle="collapse" data-bs-target="#año">Ver oferta</button>
                                <div id="año" class="collapse" data-bs-parent="#cuotas">
                                    Precio cuota de 1 año
                                    <div id="precio">114,90 €</div>
                                    <div class="text-center">
                                        <dl>
                                            <dd><b>2 meses de regalo</b></dd>
                                            <dd>Pulsera + acceso con huella + matrícula incluidos</dd>
                                            <dd>Acceso completo al centro</dd>
                                            <dd>Actividades dirigidas incluidas</dd>
                                        </dl>
                                    </div>
                                    <button type="button" 
                                            class="float-end btn btn-outline-secondary ms-1 border-0 border-start border-bottom border-2 hombre"
                                            :class="añoSel ? 'seleccionada' : ''"
                                            @click="añoSel=!añoSel, mesSel=false,seisMesesSel=false, cuotaSeleccionada(añoSel,'btnAño','btnSeisMeses','btnMes')"
                                            id="btnAño" name="cuota" value="año">Seleccionar
                                    </button>
                                </div>

                            </div>

                        </div>
                    </fieldset>

                    <!-- DATOS BANCARIOS -->
                    <fieldset class="border-top border-bottom border-danger px-3">    
                        <legend class="mt-2">Datos Bancarios</legend>

                        <div class="row">
                            
                            <!-- Cuenta Bancaria -->
                            <span class="ms-3 g-0">Cuenta Bancaria</span>

                            <div class="col-sm-4 col-md-2 form-floating mb-3 mt-3">
                                <input v-model="iban" type="text" class="form-control form-control-sm border-0 border-start border-bottom border-2"
                                    id="iban" placeholder="iban" name="iban" maxlength="4" required>
                                <label for="iban" class="ms-3">IBAN</label>
                            </div>

                            <div class="col-sm-4 col-md-2 form-floating mt-3 mb-3">
                                <input v-model="entidad" type="text" class="form-control border-0 border-start border-bottom border-2" id="entidad"
                                    placeholder="entidad" name="entidad" maxlength="4" required>
                                <label for="entidad" class="ms-3">Entidad</label>
                            </div>

                            <div class="col-sm-4 col-md-2 form-floating mb-3 mt-3">
                                <input v-model="oficina" type="text" class="form-control form-control-sm border-0 border-start border-bottom border-2"
                                    id="oficina" placeholder="oficina" name="oficina" maxlength="4" required>
                                <label for="oficina" class="ms-3">Oficina</label>
                            </div>

                            <div class="col-sm-2 col-md-2 form-floating mt-3 mb-3">
                                <input v-model="dc" type="text" class="form-control border-0 border-start border-bottom border-2" id="dc"
                                    placeholder="dc" name="dc" maxlength="2" required>
                                <label for="dc" class="ms-3">DC</label>
                            </div>

                            <div class="col-sm-10 col-md-4 form-floating mt-3 mb-3">
                                <input v-model="numCuenta" type="text" class="form-control border-0 border-start border-bottom border-2" id="cuenta"
                                    placeholder="Verifica tu correo" name="cuenta" maxlength="10" required>
                                <label for="cuenta" class="ms-3">Número de cuenta</label>
                            </div>

                        </div>
                    </fieldset>

                    <!-- CUESTIONARIO -->
                    <fieldset class="border-top border-bottom border-danger px-3">
                        <legend class="mt-2">Encuesta (opcional)</legend>

                        <div class="row">

                            <div class="col-md-5 mb-3">
                                <label for="conocer" class="ms-1 mb-1">¿Cómo nos conoció?</label>
                                <select class="form-select border-0 border-start border-bottom" id="conocer" name="conocer">
                                    <option>--Seleccionar--</option>
                                    <option>A través de las redes sociales</option>
                                    <option>Página web</option>
                                    <option>A través de conocidos</option>
                                    <option>Otros afiliados</option>
                                    <option>Publicidad</option>
                                    <option>Pasé por delante del centro</option>
                                    <option>Otros</option>
                                </select>
                            </div>

                            <div class="col-md-5 mb-3">
                                <label for="motivo" class="ms-1 mb-1">¿Motivos de inscripción?</label>
                                <select class="form-select border-0 border-start border-bottom" id="motivo" name="motivo">
                                    <option>--Seleccionar--</option>
                                    <option>Por salud</option>
                                    <option>Bajar de peso</option>
                                    <option>Por recomendación médica</option>
                                    <option>Por ocio</option>
                                    <option>Precios</option>
                                    <option>Instalaciones</option>
                                    <option>Otros</option>
                                </select>
                            </div>

                        </div>
                    </fieldset>

                    <!-- TERMINOS Y CONDICIONES -->
                    <fieldset class="border-top border-bottom border-danger mb-3 px-3 pb-3">
                        <legend class="my-2">Términos y Condiciones</legend>

                        <div class="container border rounded-3 pt-3">

                            <h6>INFORMACION BÁSICA SOBRE PROTECCIÓN DE DATOS</h6>
                            <p>
                            Responsable: MY GYM, S.L.. Finalidades: Los datos serán tratados
                            para gestionar el servicio y llevar a cabo las labores administrativas derivadas. Asimismo, en caso de que
                            el Interesado
                            lo autorizase, los datos también serán tratados para el envío de comunicaciones y fines comerciales,
                            gestionar el acceso
                            a otros centros, elaborar un perfil comercial del socio y gestionar su alta en la plataforma
                            mygym.provis.es. Derechos:
                            Los interesados tienen derecho a retirar su consentimiento, también a acceder, rectificar y suprimir sus
                            datos, así como a
                            limitar el tratamiento de estos u oponerse a ello.
                            </p>

                        </div>

                        <div class="row mt-3 ps-3">

                            <!-- CHECK CONDICIONES -->
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="check1" name="condiciones" value="condiciones" required>
                                <label class="form-check-label" for="check1">He leido y acepto las
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#condiciones" class="text-info">Condiciones Generales</a>
                                    para realizar el alta <b>online.</b>
                                </label>
                            </div>

                            <!--MODAL CONDICIONES-->
                            <div class="modal fade" id="condiciones">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">CONDICIONES GENERALES</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                    
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <h3>Ejemplo de condiciones</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                                        </div>
                                    
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info" data-bs-dismiss="modal">Cerrar</button>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>

                            <!-- CHECK NORMAS -->
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="check2" name="normas" value="normas" required>
                                <label class="form-check-label" for="check2">He leido y acepto las
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#normas" class="text-info">Normas de Uso del centro</a>.
                                </label>
                            </div>

                            <!--MODAL NORMAS-->
                            <div class="modal fade" id="normas">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">NORMAS DE USO</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                    
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <h3>Ejemplo de normas</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                                        </div>
                                    
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info" data-bs-dismiss="modal">Cerrar</button>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>

                            <!-- CHECK PRIVACIDAD -->
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="check3" name="politica" value="privacidad" required>
                                <label class="form-check-label" for="check3">He leido y acepto la
                                    <a href="#" data-bs-toggle="modal" data-bs-target="#privacidad" class="text-info">Política de Privacidad</a>.
                                </label>
                            </div>

                            <!--MODAL PRIVACIDAD-->
                            <div class="modal fade" id="privacidad">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                
                                        <!-- Modal Header -->
                                        <div class="modal-header">
                                            <h4 class="modal-title">POLITICA DE PRIVACIDAD</h4>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                        </div>
                                    
                                        <!-- Modal body -->
                                        <div class="modal-body">
                                            <h3>Ejemplo de politica de privacidad</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
                                        </div>
                                    
                                        <!-- Modal footer -->
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-info" data-bs-dismiss="modal">Cerrar</button>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>

                        </div>
                    </fieldset>

                    <!-- BOTONES DE ACEPTAR Y CANCELAR -->
                    <div class="mx-auto mt-5" id="botones">
                        <button type="submit" class="btn btn-lg btn-outline-success"
                        @click="validacionCuentaBanco">Aceptar</button>
                        <button type="reset" class="btn btn-lg btn-outline-secondary">Cancelar</button>
                    </div>

                </div>
            </form>
        </div>
    </div>
 
</template>

<script>
import Swal from 'sweetalert2';

export default {
  name: 'Inscripcion-Vue',
  data(){
      return {
          exprRegMovil: /^[67][0-9]{8}$/,
          exprRegDCuenta: /^[0-9]{4}$/,
          exprRegDc: /^[0-9]{2}$/,
          exprRegNCuenta: /^[0-9]{10}$/,
          exprRegDni: /^[0-9]{8}[A-Za-z]$/,
          exprRegEmail:/^\w+([.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail)\.(?:|com|es)+$/,
          nombre:"",
          apellidos:"",
          dni:"",
          dia:"", mes:"", año:"", //FECHA NACIMIENTO
          fechaNac: '"'+this.año/this.mes/this.dia+'"', //FORMATO FECHA
          direccion:"",
          correo:"",
          correo2:"",
          telefono:"",
          iban:"", entidad:"", oficina:"", dc:"", numCuenta:"", //CAMPOS DE NUM DE CUENTA
          esVisible: true, //CAMBIA DE 1º A 2º PARTE DE FORM
          esValido:false, 
          esHombre:false, esMujer:false, esOtros:false, //GENERO
          mesSel:false, seisMesesSel:false, añoSel:false //CUOTAS
          
      }
  },
  methods: {
        cuotaSeleccionada(laCuota,cuotaSel,opcion2,opcion3){
            if(laCuota){
                document.getElementById(cuotaSel).innerHTML = "Cuota seleccionada";    
                document.getElementById(opcion2).innerHTML = "Seleccionar";
                document.getElementById(opcion3).innerHTML = "Seleccionar";
            }
            else{
                document.getElementById(cuotaSel).innerHTML = "Seleccionar";
            }        
        },
        
        datosRellenados() {
            if(!this.nombre || !this.apellidos || !this.dni || !this.direccion || !this.correo || !this.correo2 || !this.telefono || !this.dia || !this.mes || !this.año ){
                this.popup("Por favor, rellena los datos correspondientes", "error");
            }
            else{
                if( this.validacionDni() ){
                    if( this.esMayorEdad() ){
                        if( this.correosIguales() ){
                            if ( this.validacionEmail() ){
                                if ( this.validacionMovil() ){
                                    this.esVisible=!this.esVisible;
                                    this.popupConfirmacion("¿Estás seguro de querer guardar estos datos?","warning");
                                }
                                else{
                                    this.popup("Número de teléfono no válido","error");
                                }
                            }
                            else{
                                this.popup("Correo no válido", "error");
                            }
                        }
                        else{
                            this.popup("Los correos no coinciden", "info");
                        }
                    }
                    else{
                        this.popup("La edad introducida es de un menor de edad","warning")
                    }    
                }
                else{
                    this.popup("DNI no válido","error");
                } 
            }
        },

        calcularEdad(dia,mes,año) {
            var fechaActual = new Date();
            var fechaNac = new Date(año,mes,dia);
            var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
            var mesNac = fechaActual.getMonth() - fechaNac.getMonth();
            if (mesNac < 0 || (mesNac === 0 && fechaActual.getDate() < fechaNac.getDate())) {
                edad--;
            }
            return edad;
        },

        esMayorEdad(){
            if ( this.calcularEdad(this.dia,this.mes,this.año) >= 18 ){
                return true
            }
            else{
                return false
            }
        },

        validacionMovil() {
            this.esValido = this.exprRegMovil.test(this.telefono);
            return this.esValido
        },

        validacionDni() {
            this.esValido = this.exprRegDni.test(this.dni);
            return this.esValido
        },

        validacionEmail() {
            this.esValido = this.exprRegEmail.test(this.correo);
            return this.esValido
        },

        correosIguales() {
            if(this.correo == this.correo2){
                return true
            }
            else{
                return false
            }
        },
        
        validacionCuentaBanco(){
            if(!this.iban || !this.entidad || !this.oficina || !this.dc || !this.numCuenta){
                this.popup("Por favor, completa los campos restantes", "error");
            }
            else{
                if( !this.valIban() || !this.valEntidad() || !this.valOficina() || !this.valDc() || !this.valNumCuenta() ){
                    this.popup("Los datos de cuenta no son válidos", "error")
                }
            }
        },
        valIban(){
            return this.exprRegDCuenta.test(this.iban)
        },
        valEntidad(){
            return this.exprRegDCuenta.test(this.entidad)
        },
        valOficina(){
            return this.exprRegDCuenta.test(this.oficina)
        },
        valDc(){
            return this.exprRegDc.test(this.dc)
        },
        valNumCuenta(){
            return this.exprRegNCuenta.test(this.numCuenta)
        },
        
        popup(message, status) {
            Swal.fire({

                customClass : {
                    title: 'swal2-title',
                    cancelButton: 'swal2-cancel',
                    confirmButton: 'swal2-confirm',
                    input: 'swal2-input'
                },
                icon: status,
                title: message,
                toast: true,
                position: 'bottom-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true
            })
        },
        popupConfirmacion(mensaje,status){
            Swal.fire({
                title: mensaje,
                text: "No se podrán modificar después",
                icon: status,
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Guardar',
                cancelButtonText: 'Cancelar'
                }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                    'Datos guardados correctamente.',
                    '',
                    'success'
                    )
                }
                else {
                    this.esVisible=true;
                }
            })
        }
  }
} 
</script>

<style scoped>
.seleccionada{
    background-color: rgb(238, 82, 71);
    color: white;
    border-radius: 15px;
}

#precio{
    color: black;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: 22px;
    text-align: center;
}
#oferta1, #oferta2, #oferta3{
    border-radius: 15px;
}

#oferta1:hover, #oferta2:hover, #oferta3:hover, #siguiente:hover{
    background-color: red;
    border-color: red;
}
form button:active{
    border-color: red;
}
#principal{
    /*background-image: url(../imgs/bici.jpg);*/
    text-align: left; 
}
#cuerpo{
    background-color: white;
}
input[type=text], input[type=tel], input[type=email], #dia, #mes, #año{
    border-radius: 0px 15px;
}
fieldset, #siguiente{
    border-radius: 25px;
}
#botones{
    text-align: center;
}
#hombre, #mujer, #otros {
    height: 40px;
    border-radius: 15px;
    width: 90px;
}

.containerInscripcion {
    margin: 100px 30px;
}

</style>