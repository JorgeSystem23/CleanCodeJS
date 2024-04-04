class UserAuth {
    constructor (user) {
        this.user = user;
    }

    verifyCredentials() {
        return false;
    }
}

class UserSettings extends UserAuth{
    constructor (user, settings) {
        super(user);
        this.settings = settings;
    }

    changeSettings (settings) {
        if (this.verifyCredentials()) {
            console.log('Puede modificar su configuracion')
        }
        else console.log('No tiene Acceso')
    }
}

const newAccess = new UserSettings('Jorge', 'Dark Mode')
newAccess.changeSettings()