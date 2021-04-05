module.exports = async (client) => {
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("dsc.gg/zick4 | (help", {
    type: "PLAYING",//can be LISTENING, WATCHING, PLAYING, STREAMING
  });
};