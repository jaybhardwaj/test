CREATE DATABASE  IF NOT EXISTS `EAM` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `EAM`;
-- MySQL dump 10.13  Distrib 5.6.24, for linux-glibc2.5 (x86_64)
--
-- Host: 127.0.0.1    Database: EAM
-- ------------------------------------------------------
-- Server version	5.5.44-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_RAM`
--

DROP TABLE IF EXISTS `t_RAM`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_RAM` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `RAM` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_RAM`
--

LOCK TABLES `t_RAM` WRITE;
/*!40000 ALTER TABLE `t_RAM` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_RAM` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_asset`
--

DROP TABLE IF EXISTS `t_asset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_asset` (
  `id` int(11) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `tag` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `purchasedDate` varchar(45) DEFAULT NULL,
  `warrantyDate` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_asset`
--

LOCK TABLES `t_asset` WRITE;
/*!40000 ALTER TABLE `t_asset` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_asset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_assetComponent`
--

DROP TABLE IF EXISTS `t_assetComponent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_assetComponent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ATID` int(11) NOT NULL,
  `componentName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ATID_idx` (`ATID`),
  CONSTRAINT `ATID` FOREIGN KEY (`ATID`) REFERENCES `t_assetType` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_assetComponent`
--

LOCK TABLES `t_assetComponent` WRITE;
/*!40000 ALTER TABLE `t_assetComponent` DISABLE KEYS */;
INSERT INTO `t_assetComponent` VALUES (1,1,'Desktop'),(2,1,'Laptop'),(3,1,'Accessories'),(4,2,'Development'),(5,2,'AntiVirus'),(6,2,'OS'),(7,3,'Wooden'),(8,3,'Glass'),(9,4,'NoType');
/*!40000 ALTER TABLE `t_assetComponent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_assetType`
--

DROP TABLE IF EXISTS `t_assetType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_assetType` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_assetType`
--

LOCK TABLES `t_assetType` WRITE;
/*!40000 ALTER TABLE `t_assetType` DISABLE KEYS */;
INSERT INTO `t_assetType` VALUES (1,'Hardware'),(2,'Software'),(3,'Furniture'),(4,'Stationary');
/*!40000 ALTER TABLE `t_assetType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_attName`
--

DROP TABLE IF EXISTS `t_attName`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_attName` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attNo` int(11) NOT NULL,
  `ACID` int(11) NOT NULL,
  `AID` int(11) NOT NULL,
  `flag` bit(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ACID_idx` (`ACID`),
  KEY `AID_idx` (`AID`),
  CONSTRAINT `ACID` FOREIGN KEY (`ACID`) REFERENCES `t_assetComponent` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `AID` FOREIGN KEY (`AID`) REFERENCES `t_attributes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_attName`
--

LOCK TABLES `t_attName` WRITE;
/*!40000 ALTER TABLE `t_attName` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_attName` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_attributes`
--

DROP TABLE IF EXISTS `t_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_attributes`
--

LOCK TABLES `t_attributes` WRITE;
/*!40000 ALTER TABLE `t_attributes` DISABLE KEYS */;
INSERT INTO `t_attributes` VALUES (0,'null'),(1,'processor'),(2,'hd'),(3,'ram');
/*!40000 ALTER TABLE `t_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_brand`
--

DROP TABLE IF EXISTS `t_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_brand` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_brand`
--

LOCK TABLES `t_brand` WRITE;
/*!40000 ALTER TABLE `t_brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_hardDisk`
--

DROP TABLE IF EXISTS `t_hardDisk`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_hardDisk` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `hardDiskName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_hardDisk`
--

LOCK TABLES `t_hardDisk` WRITE;
/*!40000 ALTER TABLE `t_hardDisk` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_hardDisk` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_hardware`
--

DROP TABLE IF EXISTS `t_hardware`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_hardware` (
  `id` int(11) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `platformId` varchar(45) DEFAULT NULL,
  `make` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `serialNumber` varchar(45) DEFAULT NULL,
  `assetTagId` varchar(45) DEFAULT NULL,
  `purchaseOrder` varchar(45) DEFAULT NULL,
  `datePurchased` varchar(45) DEFAULT NULL,
  `warrantyDate` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_hardware`
--

LOCK TABLES `t_hardware` WRITE;
/*!40000 ALTER TABLE `t_hardware` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_hardware` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_hardwareType`
--

DROP TABLE IF EXISTS `t_hardwareType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_hardwareType` (
  `id` int(11) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `subtype` varchar(45) DEFAULT NULL,
  `flag` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_hardwareType`
--

LOCK TABLES `t_hardwareType` WRITE;
/*!40000 ALTER TABLE `t_hardwareType` DISABLE KEYS */;
INSERT INTO `t_hardwareType` VALUES (1,'laptop','charger',NULL),(2,'desktop','cpu',NULL),(3,'laptop','laptop',NULL),(4,'desktop','monitor',NULL);
/*!40000 ALTER TABLE `t_hardwareType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_header`
--

DROP TABLE IF EXISTS `t_header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_header` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeID` varchar(45) NOT NULL,
  `purchaseOrder` varchar(45) NOT NULL,
  `quantity` varchar(45) NOT NULL,
  `purchaseDate` varchar(45) NOT NULL,
  `vendor` varchar(45) NOT NULL,
  `createdDate` varchar(45) NOT NULL,
  `modifiedDate` varchar(45) NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `modifiedBy` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_header`
--

LOCK TABLES `t_header` WRITE;
/*!40000 ALTER TABLE `t_header` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_header` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_line`
--

DROP TABLE IF EXISTS `t_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_line` (
  `id` int(11) NOT NULL,
  `headerID` varchar(45) NOT NULL,
  `serialNo` varchar(45) NOT NULL,
  `processor` varchar(45) NOT NULL,
  `ram` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `warranty` varchar(45) NOT NULL,
  `createdDate` date NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `modifiedDate` date NOT NULL,
  `modifiedBy` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_line`
--

LOCK TABLES `t_line` WRITE;
/*!40000 ALTER TABLE `t_line` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_line` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_location`
--

DROP TABLE IF EXISTS `t_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_location` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_location`
--

LOCK TABLES `t_location` WRITE;
/*!40000 ALTER TABLE `t_location` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_mapToComponents`
--

DROP TABLE IF EXISTS `t_mapToComponents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_mapToComponents` (
  `id` int(11) NOT NULL,
  `lineId` varchar(45) NOT NULL,
  `accId` varchar(45) NOT NULL,
  `serialNo` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `warranty` varchar(45) NOT NULL,
  `createdDate` date NOT NULL,
  `createdBy` varchar(45) NOT NULL,
  `modifiedDate` date NOT NULL,
  `modifiedBy` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_mapToComponents`
--

LOCK TABLES `t_mapToComponents` WRITE;
/*!40000 ALTER TABLE `t_mapToComponents` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_mapToComponents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_processor`
--

DROP TABLE IF EXISTS `t_processor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_processor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `processorName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_processor`
--

LOCK TABLES `t_processor` WRITE;
/*!40000 ALTER TABLE `t_processor` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_processor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_software`
--

DROP TABLE IF EXISTS `t_software`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_software` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `version` varchar(45) DEFAULT NULL,
  `platform` varchar(45) DEFAULT NULL,
  `vendor` varchar(45) DEFAULT NULL,
  `licenseType` varchar(45) DEFAULT NULL,
  `seats` varchar(45) DEFAULT NULL,
  `purchasedDate` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `licensePurchasedDate` varchar(45) DEFAULT NULL,
  `licenseExpiryDate` varchar(45) DEFAULT NULL,
  `licenseKey` varchar(45) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_software`
--

LOCK TABLES `t_software` WRITE;
/*!40000 ALTER TABLE `t_software` DISABLE KEYS */;
INSERT INTO `t_software` VALUES (0,'dxxxxxxxxxxx',NULL,NULL,'esssssssssd',NULL,'5','2015-12-02',NULL,'2','2015-12-11','2015-12-24','222222','dcxxxxc');
/*!40000 ALTER TABLE `t_software` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_vendor`
--

DROP TABLE IF EXISTS `t_vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_vendor` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `contact` varchar(45) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_vendor`
--

LOCK TABLES `t_vendor` WRITE;
/*!40000 ALTER TABLE `t_vendor` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_warranty`
--

DROP TABLE IF EXISTS `t_warranty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_warranty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `warranty` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_warranty`
--

LOCK TABLES `t_warranty` WRITE;
/*!40000 ALTER TABLE `t_warranty` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_warranty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temp1`
--

DROP TABLE IF EXISTS `temp1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temp1` (
  `type` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temp1`
--

LOCK TABLES `temp1` WRITE;
/*!40000 ALTER TABLE `temp1` DISABLE KEYS */;
/*!40000 ALTER TABLE `temp1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'EAM'
--

--
-- Dumping routines for database 'EAM'
--
/*!50003 DROP PROCEDURE IF EXISTS `getMap` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` PROCEDURE `getMap`(cid int)
BEGIN
select acid, attNo,AID,flag from t_attName where ACID=cid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `mapAtt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` PROCEDURE `mapAtt`(ACID int,
pri varchar(45),sec varchar(45),priAtt varchar(45),secAtt varchar(45))
BEGIN
if pri!='' then
call usp_split_nr(pri,null,'primary7');
call usp_split_nr(priAtt,null,'priAttribute');
select count(1) from t_attName q where
 q.ACID=ACID and q.flag='0' and q.attNo in (select variable from
 priAttribute) into @ifExist;
 if @ifExist>0 then
update t_attName x inner join priAttribute y on y.variable=x.attNo 
inner join primary7 z on y.id=z.id set x.AID=z.variable
 where x.ACID=ACID 
 and x.flag='0';
 end if;
 if @ifExist=0 then
insert into t_attName(attNo,ACID,AID,flag) select p.variable,ACID,
 a.variable,0 from primary7 a inner join priAttribute p on a.id=p.id;
end if;
end if;
if sec!='' then
call usp_split_nr(sec,null,'secondary');
call usp_split_nr(secAtt,null,'secAttribute');
select count(1) from t_attName q where
 q.ACID=ACID and q.flag='1' and q.attNo in (select variable from
 secAttribute) into @ifExist;
 if @ifExist>0 then
update t_attName x inner join secAttribute y on y.variable=x.attNo 
inner join secondary z on y.id=z.id set x.AID=z.variable
 where x.ACID=ACID 
 and x.flag='1';
 end if;
 if @ifExist=0 then
 insert into t_attName(attNo,ACID,AID,flag) select r.variable,ACID,
 s.variable,1 from secondary s inner join secAttribute r on s.id=r.id;
 end if;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_getTypeAndSubtype` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`sa`@`%` PROCEDURE `sp_getTypeAndSubtype`()
BEGIN
select * from EAM.t_assetType;
select * from EAM.t_assetComponent where ATID=1;
select * from EAM.t_attributes;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_split_nr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `usp_split_nr`(IN toSplit text, IN target char(255),in tableName varchar(255) )
BEGIN
	# Temp table variables
	SET @tableName = tableName;
	SET @fieldName = 'variable';
 
	# Dropping table
	SET @sql := CONCAT('DROP TABLE IF EXISTS ', @tableName);
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
 
	# Creating table
	SET @sql := CONCAT('CREATE TEMPORARY TABLE ', @tableName, '(Id int auto_increment,', @fieldName, ' VARCHAR(1000),primary key(Id))');
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
 
	# Preparing toSplit
	SET @vars := toSplit;
	SET @vars := CONCAT("('", REPLACE(@vars, ",", "'),('"), "')");
 
	# Inserting values
	SET @sql := CONCAT('INSERT INTO ', @tableName,'(',@fieldName,') VALUES ', @vars);
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-11 12:02:00
