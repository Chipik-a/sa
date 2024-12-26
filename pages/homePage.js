export class HomePage {

    constructor(page) {
        this.loginButton = page.getByText('Login').last();
        this.cookieButton = page.getByText( 'Agree').last()
    }

    // async acceptCookie(){
    //    await this.page.addLocatorHandler(
    //        this.cookieButton,
    //        async () => {
    //            await this.cookieButton.click();
    //        }
    //    )
    // }
}
