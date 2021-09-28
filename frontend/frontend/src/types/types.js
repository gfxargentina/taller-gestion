export const types = {
	uiOpenModal: '[ui] Open modal',
	uiCloseModal: '[ui] Close modal',

	authCheckingFinish: '[auth] Finish Checking login state',
	authStartLogin: '[auth] start login',
	authLogin: '[auth] login',
	authStartRegister: '[auth] Start register',
	authStartTokenRenew: '[auth] Start Token renew',
	authLogout: '[auth] Logout',

	setActiveClient: '[client] Set active client',
	clientGetAll: '[client] get all clients',
	//inicializa el proceso de grabacion de un nuevo cliente
	startNewClient: '[client] Start add new client',
	//inicializa la edicion de un cliente
	startEditClient: '[client] Start edit client',
	//inicializa el proceso de edicion de un cliente
	clientUpdated: '[client] client updated',
	//inicializa el proceso de eliminacion de un cliente
	clientDeleted: '[cliente] Client deleted',

	aparatoActivo: '[aparato]El aparato activo',
	startNewAparato: '[aparato] Start add new aparato',
	startEditAparato: '[aparato] Start edit aparato',
	aparatosGetAll: '[client] get all aparatos',
	aparatoUpdated: '[aparato] aparato updated'
};
