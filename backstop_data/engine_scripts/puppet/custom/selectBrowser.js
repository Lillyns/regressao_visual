module.exports = async page => {
    // await page.click(".browser-default");
    // 
    await page.select("#dropdown", "Chrome");
}

//await page.scrollToSelector('#dropdown', {timeout: 60000}); 