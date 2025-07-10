describe('Google Search', () => {
  it('should open Google and check title', async () => {
    await browser.url('/');
    const title = await browser.getTitle();
    expect(title).toContain('Google');
  });
});
