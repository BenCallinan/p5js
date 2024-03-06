import { SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("choochoo")
  .setDescription("This is a demo choo choo!");

export async function execute(interaction) {
  await interaction.reply("choo choo");
}
