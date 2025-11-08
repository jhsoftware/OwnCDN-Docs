---
Slug: ui-general-settings
DocID: 41
---
# UI / General Settings

## Instance name

Name of this OwnCDN instance. Defaults to the computer name.

## New UI Password

Enter a value to change the UI password. Leave blank to not change. 

## Time zone

The time zone used to display dates / times in the UI.

## Send alerts

Specify if / how you wish to send general alerts from OwnCDN.

### HTTP POST JSON (generic)

Specify the **To URL**

### Discord webhook

Discord is an instant messaging and VoIP social platform. See <https://discord.com>

Specify **Discord webhook URL**.
See [How to generate webhook URL in Discord](discord.md).

### Seq API

Seq is a "self-hosted search, analysis, and alerting server" from Datalust.
See <https://datalust.co/seq>

Specify **Seq API URL** and **Seq API Key**.

## Alert types

- Start up - send an alert when OwnCDN is started.
- Shut down - send an alert when OwnCDN is shut down.
- Errors / Warnings - send alerts for errors and warnings.

## Update (button)

Click to save / update the information on the page.
Changes are NOT saved until you click this button.
