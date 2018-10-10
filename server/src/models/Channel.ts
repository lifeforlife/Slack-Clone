import * as Sequelize from "sequelize";

export const ChannelFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<ChannelInstance, ChannelAttributes> => {
  const attributes: SequelizeAttributes<ChannelAttributes> = {
    name: DataTypes.STRING,
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    messageGroup: {
      type: DataTypes.BOOLEAN,
      field: "message_group",
      defaultValue: false
    },
    brief_description: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 127],
          msg: "The length cannot be longer than 128 characters"
        }
      }
    },
    detail_description: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 255],
          msg: "The length cannot be longer than 256 characters"
        }
      }
    }
  };
  const Channel = sequelize.define<ChannelInstance, ChannelAttributes>(
    "channel",
    attributes
  );

  Channel.associate = models => {
    // 1:M
    Channel.belongsTo(models.Team, {
      foreignKey: {
        name: "teamId",
        field: "team_id"
      }
    });

    // N:M
    Channel.belongsToMany(models.User, {
      through: models.ChannelMember,
      foreignKey: {
        name: "channelId",
        field: "channel_id"
      }
    });
  };
  return Channel;
};
