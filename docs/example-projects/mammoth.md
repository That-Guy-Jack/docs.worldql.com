---
sidebar_position: 2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mammoth, a horizontally scalable Minecraft server

Use WorldQL to synchronize blocks and player visuals across an arbitrary number of Minecraft servers.

:::danger Work in progress!
We're hard at work building. Documentation on this example project is still a work in progress and subject to change!
:::

## Setup and Prerequisites

TBD

## Example configs

Plugin config: 
- Seamless mode. This is the mode you've already seen. Players can PVP and see each other across servers. This is ideal for large-scale PVP or event servers. However, it does not support redstone, entity synchronization, or many critical components of the vanilla game.
- Sliced mode. This is similar to the old version of Mammoth. The world is carved into sections and each server has ownership of certain regions of the world. When a player crosses over a border, they are transferred between servers.
We use tricks from seamless mode to make these borders very smooth. You can see players across a server border and even shoot an arrow at them (or build a TNT cannon). This mode will allow redstone in areas that are not near borders