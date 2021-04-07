module.exports = async page => {
    await page.type("#user_name", "Talita");
    await page.type("#user_lastname", "Lima");
    await page.type("#user_email", "teste@hotmail.com");
    await page.click("input[type=\"submit\"]");
}