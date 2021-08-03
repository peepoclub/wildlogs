-- CreateTable
CREATE TABLE `logs` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `channel` VARCHAR(50),
    `channelID` VARCHAR(50),
    `name` VARCHAR(50),
    `displayName` VARCHAR(50),
    `userID` VARCHAR(50),
    `message` VARCHAR(1500),
    `tags` VARCHAR(5000),
    `timestamp` BIGINT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
