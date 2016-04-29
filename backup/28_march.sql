CREATE DATABASE  IF NOT EXISTS `portal` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `portal`;
-- MySQL dump 10.13  Distrib 5.5.46, for debian-linux-gnu (x86_64)
--
-- Host: 192.168.1.123    Database: portal
-- ------------------------------------------------------
-- Server version	5.6.26-log

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
-- Table structure for table `t_assignment`
--

DROP TABLE IF EXISTS `t_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_assignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ProjectId` varchar(45) DEFAULT NULL,
  `WBSID` varchar(45) DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  `isActive` int(11) DEFAULT NULL,
  `AssignmentDate` varchar(45) DEFAULT NULL,
  `AssignmentEndDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_assignment`
--

LOCK TABLES `t_assignment` WRITE;
/*!40000 ALTER TABLE `t_assignment` DISABLE KEYS */;
INSERT INTO `t_assignment` VALUES (1,'3','2',1,1,'03/02/2016','03/14/2016'),(2,'3','3',1,1,'03/09/2016','03/30/2016'),(3,'3','4',1,0,'03/23/2016','03/25/2016'),(4,'2','1',1,1,'03/08/2016','03/14/2016'),(5,'2','5',1,1,'04/07/2016','04/28/2016');
/*!40000 ALTER TABLE `t_assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_assetcomponent`
--

DROP TABLE IF EXISTS `t_ast_assetcomponent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_assetcomponent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ATID` int(11) NOT NULL,
  `componentName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `attid_idx` (`ATID`),
  CONSTRAINT `attid` FOREIGN KEY (`ATID`) REFERENCES `t_ast_assettype` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_assetcomponent`
--

LOCK TABLES `t_ast_assetcomponent` WRITE;
/*!40000 ALTER TABLE `t_ast_assetcomponent` DISABLE KEYS */;
INSERT INTO `t_ast_assetcomponent` VALUES (1,1,'Desktop'),(2,1,'Laptop'),(3,1,'Accessories'),(4,2,'Anti-Virus'),(5,2,'OS'),(6,2,'Supportive'),(7,2,'Development Tool');
/*!40000 ALTER TABLE `t_ast_assetcomponent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_assettype`
--

DROP TABLE IF EXISTS `t_ast_assettype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_assettype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_assettype`
--

LOCK TABLES `t_ast_assettype` WRITE;
/*!40000 ALTER TABLE `t_ast_assettype` DISABLE KEYS */;
INSERT INTO `t_ast_assettype` VALUES (1,'Hardware'),(2,'Software'),(3,'Furniture'),(4,'Stationary');
/*!40000 ALTER TABLE `t_ast_assettype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_attname`
--

DROP TABLE IF EXISTS `t_ast_attname`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_attname` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attNo` int(11) NOT NULL,
  `ACID` int(11) NOT NULL,
  `AID` int(11) NOT NULL,
  `flag` bit(1) DEFAULT NULL,
  `colName` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_attname`
--

LOCK TABLES `t_ast_attname` WRITE;
/*!40000 ALTER TABLE `t_ast_attname` DISABLE KEYS */;
INSERT INTO `t_ast_attname` VALUES (1,1,1,1,'\0','a1'),(2,2,1,2,'\0','a2'),(3,4,1,5,'\0','a4');
/*!40000 ALTER TABLE `t_ast_attname` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_attributes`
--

DROP TABLE IF EXISTS `t_ast_attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_attributes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_attributes`
--

LOCK TABLES `t_ast_attributes` WRITE;
/*!40000 ALTER TABLE `t_ast_attributes` DISABLE KEYS */;
INSERT INTO `t_ast_attributes` VALUES (1,'RAM'),(2,'processor'),(3,'hd'),(4,'mouse'),(5,'keyboard'),(6,'ups'),(7,'monitor'),(8,'charger');
/*!40000 ALTER TABLE `t_ast_attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_attvalues`
--

DROP TABLE IF EXISTS `t_ast_attvalues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_attvalues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ACID` int(11) NOT NULL,
  `AID` int(11) NOT NULL,
  `valu` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_attvalues`
--

LOCK TABLES `t_ast_attvalues` WRITE;
/*!40000 ALTER TABLE `t_ast_attvalues` DISABLE KEYS */;
INSERT INTO `t_ast_attvalues` VALUES (1,1,1,'q'),(2,1,1,'w'),(3,1,1,'e'),(4,1,2,'a'),(5,1,2,'s'),(6,1,2,'d'),(7,1,3,'z'),(8,1,3,'x'),(9,1,3,'c');
/*!40000 ALTER TABLE `t_ast_attvalues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_brand`
--

DROP TABLE IF EXISTS `t_ast_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_brand` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_brand`
--

LOCK TABLES `t_ast_brand` WRITE;
/*!40000 ALTER TABLE `t_ast_brand` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_ast_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_header`
--

DROP TABLE IF EXISTS `t_ast_header`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_header` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ACID` varchar(45) DEFAULT NULL,
  `purchaseOrder` varchar(45) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `deliveryDate` datetime DEFAULT NULL,
  `vendor` varchar(45) NOT NULL,
  `createdDate` datetime DEFAULT NULL,
  `modifiedDate` datetime DEFAULT NULL,
  `createdBy` varchar(45) DEFAULT NULL,
  `modifiedBy` varchar(45) DEFAULT NULL,
  `invoiceAmt` int(11) DEFAULT NULL,
  `invoiceDate` datetime NOT NULL,
  `invoiceNo` varchar(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `uprice` int(11) DEFAULT NULL,
  `color` varchar(20) DEFAULT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `atr4` varchar(45) DEFAULT NULL,
  `atr5` varchar(45) DEFAULT NULL,
  `atr6` datetime DEFAULT NULL,
  `atr7` datetime DEFAULT NULL,
  `atr8` datetime DEFAULT NULL,
  `atr9` datetime DEFAULT NULL,
  `atr10` int(11) DEFAULT NULL,
  `atr11` int(11) DEFAULT NULL,
  `atr12` int(11) DEFAULT NULL,
  `isActive` tinyint(11) DEFAULT NULL,
  `licenceKey` varchar(100) DEFAULT NULL,
  `users` varchar(20) DEFAULT NULL,
  `licenceExpDate` datetime DEFAULT NULL,
  `licencePurchaseDate` datetime DEFAULT NULL,
  `softType` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `licenceRqd` varchar(4) DEFAULT NULL,
  `atid` int(2) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_header`
--

LOCK TABLES `t_ast_header` WRITE;
/*!40000 ALTER TABLE `t_ast_header` DISABLE KEYS */;
INSERT INTO `t_ast_header` VALUES (1,'null',NULL,NULL,NULL,'rr',NULL,NULL,NULL,NULL,NULL,'2016-03-15 12:00:00',NULL,'kumar',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,'5','dffr','off',1),(2,'null',NULL,NULL,NULL,'daed',NULL,NULL,NULL,NULL,NULL,'2016-03-15 12:00:00',NULL,'jik',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'8298hyi3','12','2016-04-22 12:00:00','2016-03-16 12:00:00','6','jkd','on',1),(3,'null',NULL,NULL,NULL,'ww',NULL,NULL,NULL,NULL,NULL,'2016-03-17 12:00:00',NULL,'kd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,'6','descriiiiii','off',1),(4,'null',NULL,12,'2016-04-01 12:00:00','qq',NULL,NULL,NULL,NULL,221,'2016-03-29 12:00:00','2e','Development Tool',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,'7','lkaql','off',1),(5,'7',NULL,NULL,NULL,'qq',NULL,NULL,NULL,NULL,NULL,'2016-03-29 12:00:00',NULL,'dd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,'7','lkaql','off',2),(6,'7',NULL,NULL,NULL,'qq',NULL,NULL,NULL,NULL,NULL,'2016-03-29 12:00:00',NULL,'dd',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,'7','lkaql','off',2),(7,'6',NULL,NULL,NULL,'rer',NULL,NULL,NULL,NULL,NULL,'2016-03-21 12:00:00',NULL,'jieo',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,'6','lkejrr','off',2),(8,'5',NULL,NULL,NULL,'jk',NULL,NULL,NULL,NULL,NULL,'2016-03-23 12:00:00',NULL,'io',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,'8777777777','2','2017-03-31 12:00:00','2016-03-25 12:00:00','5','dessssssssssssssss','on',2),(9,'5',NULL,NULL,NULL,'jk',NULL,NULL,NULL,NULL,NULL,'2016-03-23 12:00:00',NULL,'io',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,'8777777777','2','2017-03-31 12:00:00','2016-03-25 12:00:00','5','dessssssssssssssss','on',2),(10,'5',NULL,NULL,NULL,'qq',NULL,NULL,NULL,NULL,NULL,'2016-03-21 12:00:00',NULL,'dlkl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,'5','sks','off',2),(11,'5',NULL,NULL,NULL,'qq',NULL,NULL,NULL,NULL,NULL,'2016-03-21 12:00:00',NULL,'dlkl',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,NULL,NULL,'5','sks','off',2),(12,'2','12311',12,'2016-03-28 00:00:00','jk',NULL,NULL,NULL,NULL,10290,'2016-03-25 00:00:00','2990',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(13,'2','dlff',3,'2016-03-29 00:00:00','jkkk',NULL,NULL,NULL,NULL,10022,'2016-03-25 00:00:00','1109',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(14,'2','rf',2,'2016-03-31 00:00:00','fe',NULL,NULL,NULL,NULL,4500,'2016-03-28 00:00:00','22',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(15,'2','22',2,'2016-03-31 00:00:00','dd',NULL,NULL,NULL,NULL,1233,'2016-03-28 00:00:00','133',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(16,'1','jjk',3,'2016-03-28 00:00:00','ddd',NULL,NULL,NULL,NULL,3333,'2016-03-22 00:00:00','21',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(17,'1','dds32',1,'2016-03-31 00:00:00','w',NULL,NULL,NULL,NULL,111,'2016-03-28 00:00:00','33',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `t_ast_header` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_line`
--

DROP TABLE IF EXISTS `t_ast_line`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_line` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `a1` varchar(45) DEFAULT NULL,
  `a2` varchar(45) DEFAULT NULL,
  `a3` varchar(45) DEFAULT NULL,
  `a4` varchar(45) DEFAULT NULL,
  `a5` varchar(45) DEFAULT NULL,
  `a6` varchar(45) DEFAULT NULL,
  `a7` varchar(45) DEFAULT NULL,
  `a8` varchar(45) DEFAULT NULL,
  `a9` varchar(45) DEFAULT NULL,
  `a10` varchar(45) DEFAULT NULL,
  `a11` varchar(45) DEFAULT NULL,
  `a12` varchar(45) DEFAULT NULL,
  `a13` varchar(45) DEFAULT NULL,
  `a14` varchar(45) DEFAULT NULL,
  `a15` varchar(45) DEFAULT NULL,
  `a16` varchar(45) DEFAULT NULL,
  `a17` varchar(45) DEFAULT NULL,
  `a18` varchar(45) DEFAULT NULL,
  `a19` varchar(45) DEFAULT NULL,
  `a20` varchar(45) DEFAULT NULL,
  `hId` int(11) NOT NULL,
  `ACID` int(11) DEFAULT NULL,
  `tagNo` varchar(45) DEFAULT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `warranty` varchar(45) DEFAULT NULL,
  `serialNo` varchar(45) DEFAULT NULL,
  `licenceRqd` varchar(10) DEFAULT NULL,
  `licenceKey` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_line`
--

LOCK TABLES `t_ast_line` WRITE;
/*!40000 ALTER TABLE `t_ast_line` DISABLE KEYS */;
INSERT INTO `t_ast_line` VALUES (1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(2,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(3,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(4,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(5,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(6,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(7,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(8,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(9,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(10,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(11,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(12,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,2,NULL,NULL,NULL,NULL,NULL,'on','8298hyi3'),(13,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,4,7,NULL,NULL,NULL,NULL,'off',NULL),(14,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,5,7,NULL,NULL,NULL,NULL,'off',NULL),(15,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,6,7,NULL,NULL,NULL,NULL,'off',NULL),(16,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,7,6,NULL,NULL,NULL,NULL,'off',NULL),(17,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,8,5,NULL,NULL,NULL,NULL,'on','8777777777'),(18,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,8,5,NULL,NULL,NULL,NULL,'on','8777777777'),(19,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,9,5,NULL,NULL,NULL,NULL,'on','8777777777'),(20,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,9,5,NULL,NULL,NULL,NULL,'on','8777777777'),(21,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,10,5,NULL,NULL,NULL,NULL,'off',NULL),(22,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,11,5,NULL,NULL,NULL,NULL,'off',NULL),(23,'1','1',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,16,1,'Desktop/1','2','3','11111',NULL,NULL),(24,'1','1',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,16,1,'Desktop/2','2','3','1112',NULL,NULL),(25,'1','1',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,16,1,'Desktop/3','2','3','111114',NULL,NULL),(26,'1','1',NULL,'1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,17,1,'Desktop/4','2','3','111123',NULL,NULL);
/*!40000 ALTER TABLE `t_ast_line` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_maptocomponents`
--

DROP TABLE IF EXISTS `t_ast_maptocomponents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_maptocomponents` (
  `id` int(11) NOT NULL,
  `lineId` varchar(45) NOT NULL,
  `attId` varchar(45) NOT NULL,
  `serialNo` varchar(45) NOT NULL,
  `brand` varchar(45) NOT NULL,
  `warranty` varchar(45) NOT NULL,
  `createdDate` date NOT NULL,
  `createdBy` varchar(45) DEFAULT NULL,
  `modifiedDate` date NOT NULL,
  `modifiedBy` varchar(45) DEFAULT NULL,
  `tagNo` varchar(45) NOT NULL,
  `size` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_maptocomponents`
--

LOCK TABLES `t_ast_maptocomponents` WRITE;
/*!40000 ALTER TABLE `t_ast_maptocomponents` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_ast_maptocomponents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_softwareassignment`
--

DROP TABLE IF EXISTS `t_ast_softwareassignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_softwareassignment` (
  `lineIdHw` int(11) DEFAULT NULL,
  `lineIdSw` int(11) DEFAULT NULL,
  `acidHw` int(11) DEFAULT NULL,
  `acidSw` int(11) DEFAULT NULL,
  `assignDate` datetime DEFAULT NULL,
  `unassignDate` datetime DEFAULT NULL,
  `id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_softwareassignment`
--

LOCK TABLES `t_ast_softwareassignment` WRITE;
/*!40000 ALTER TABLE `t_ast_softwareassignment` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_ast_softwareassignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_transaction`
--

DROP TABLE IF EXISTS `t_ast_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_transaction` (
  `UID` int(11) NOT NULL,
  `CID` int(11) DEFAULT NULL,
  `LID` int(11) NOT NULL,
  `assign` int(11) NOT NULL DEFAULT '1',
  `assignDate` datetime DEFAULT NULL,
  `unassignDate` datetime DEFAULT NULL,
  `att1` varchar(45) DEFAULT NULL,
  `att2` varchar(45) DEFAULT NULL,
  `att3` varchar(45) DEFAULT NULL,
  `att4` varchar(45) DEFAULT NULL,
  `att5` varchar(45) DEFAULT NULL,
  `att6` varchar(45) DEFAULT NULL,
  `att7` varchar(45) DEFAULT NULL,
  `att8` varchar(45) DEFAULT NULL,
  `att9` varchar(45) DEFAULT NULL,
  `atid` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_index` (`UID`,`LID`,`CID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_transaction`
--

LOCK TABLES `t_ast_transaction` WRITE;
/*!40000 ALTER TABLE `t_ast_transaction` DISABLE KEYS */;
INSERT INTO `t_ast_transaction` VALUES (1,0,1,1,'2016-03-23 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1),(1,1,1,1,'2016-03-15 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,2),(1,0,2,0,'2016-03-17 00:00:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,14);
/*!40000 ALTER TABLE `t_ast_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_vendor`
--

DROP TABLE IF EXISTS `t_ast_vendor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_vendor` (
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
-- Dumping data for table `t_ast_vendor`
--

LOCK TABLES `t_ast_vendor` WRITE;
/*!40000 ALTER TABLE `t_ast_vendor` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_ast_vendor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_ast_warranty`
--

DROP TABLE IF EXISTS `t_ast_warranty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_ast_warranty` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `warranty` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_ast_warranty`
--

LOCK TABLES `t_ast_warranty` WRITE;
/*!40000 ALTER TABLE `t_ast_warranty` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_ast_warranty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_bug_attachments`
--

DROP TABLE IF EXISTS `t_bug_attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_bug_attachments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bugId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  `filePath` varchar(300) DEFAULT NULL,
  `fileName` varchar(200) DEFAULT NULL,
  `orignalFileName` varchar(100) DEFAULT NULL,
  `uploadDate` datetime DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `lastModifiedBy` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_bug_attachments`
--

LOCK TABLES `t_bug_attachments` WRITE;
/*!40000 ALTER TABLE `t_bug_attachments` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_bug_attachments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_bug_bugdetails`
--

DROP TABLE IF EXISTS `t_bug_bugdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_bug_bugdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `projectId` int(11) DEFAULT NULL,
  `assingedToUserId` int(11) DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  `priority` int(11) DEFAULT NULL,
  `severity` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `bugTitle` varchar(200) DEFAULT NULL,
  `bugDescription` varchar(1000) DEFAULT NULL,
  `effectiveStartDate` datetime DEFAULT NULL,
  `effectiveEndDate` datetime DEFAULT NULL,
  `technology` int(11) DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` int(11) DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_bug_bugdetails`
--

LOCK TABLES `t_bug_bugdetails` WRITE;
/*!40000 ALTER TABLE `t_bug_bugdetails` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_bug_bugdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_bug_comments`
--

DROP TABLE IF EXISTS `t_bug_comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_bug_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bugId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `comments` varchar(500) DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `lastModifiedBy` int(11) DEFAULT NULL,
  `attachmentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_bug_comments`
--

LOCK TABLES `t_bug_comments` WRITE;
/*!40000 ALTER TABLE `t_bug_comments` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_bug_comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_clients`
--

DROP TABLE IF EXISTS `t_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `clientCode` varchar(100) DEFAULT NULL,
  `clientName` varchar(200) DEFAULT NULL,
  `clientAbbName` varchar(100) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `location` int(11) DEFAULT NULL,
  `clientContactPerson` varchar(200) DEFAULT NULL,
  `clientContactPersonEmail` varchar(20) DEFAULT NULL,
  `clientContactPhone` varchar(20) DEFAULT NULL,
  `isActive` int(11) DEFAULT '1',
  `createdDate` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  `lastModifiedDate` datetime DEFAULT NULL,
  `lastModifiedBy` int(11) DEFAULT NULL,
  `clientAccountLead` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_clients`
--

LOCK TABLES `t_clients` WRITE;
/*!40000 ALTER TABLE `t_clients` DISABLE KEYS */;
INSERT INTO `t_clients` VALUES (1,'hcl_dhsdgghs','hcl','Infosystem','Diamond','delhi',2,'jsp singh','hcl@gmail.com','4522586953',1,'2016-03-28 14:20:21',1,1,'2016-03-28 14:51:24',1,1),(2,'HCL_HCLI','HCLI','HCLI','Silver','',2,'HCL','hcl@abc.com','',1,'2016-03-28 17:31:00',1,1,'2016-03-28 17:31:11',1,1);
/*!40000 ALTER TABLE `t_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_doc_attachfilemap`
--

DROP TABLE IF EXISTS `t_doc_attachfilemap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_doc_attachfilemap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_id` int(11) NOT NULL,
  `vertical_id` int(11) NOT NULL,
  `verticalvalues_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_doc_attachfilemap`
--

LOCK TABLES `t_doc_attachfilemap` WRITE;
/*!40000 ALTER TABLE `t_doc_attachfilemap` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_doc_attachfilemap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_doc_attachrolemap`
--

DROP TABLE IF EXISTS `t_doc_attachrolemap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_doc_attachrolemap` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `crole_id` int(11) NOT NULL,
  `vertical_id` int(11) NOT NULL,
  `verticalvalues_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_doc_attachrolemap`
--

LOCK TABLES `t_doc_attachrolemap` WRITE;
/*!40000 ALTER TABLE `t_doc_attachrolemap` DISABLE KEYS */;
INSERT INTO `t_doc_attachrolemap` VALUES (1,1,1,1),(2,1,1,2),(3,1,1,3),(4,1,1,4),(8,1,2,5),(9,1,2,6),(10,1,2,7),(11,1,3,8),(12,1,4,13),(13,1,5,16),(14,1,5,17),(41,3,1,2),(42,3,2,5),(43,3,3,9),(44,3,4,12),(45,3,5,17),(46,2,1,1),(47,2,2,6),(48,2,3,8),(49,2,4,13),(50,2,5,17);
/*!40000 ALTER TABLE `t_doc_attachrolemap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_doc_customrole`
--

DROP TABLE IF EXISTS `t_doc_customrole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_doc_customrole` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(100) DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_doc_customrole`
--

LOCK TABLES `t_doc_customrole` WRITE;
/*!40000 ALTER TABLE `t_doc_customrole` DISABLE KEYS */;
INSERT INTO `t_doc_customrole` VALUES (1,'cRole',1),(2,'sds',1),(3,'sd',1);
/*!40000 ALTER TABLE `t_doc_customrole` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_doc_file`
--

DROP TABLE IF EXISTS `t_doc_file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_doc_file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  `description` varchar(5000) DEFAULT NULL,
  `author` varchar(250) DEFAULT NULL,
  `uploadDate` varchar(45) DEFAULT NULL,
  `fpath` varchar(250) DEFAULT NULL,
  `title` varchar(500) DEFAULT NULL,
  `uploadedBy` varchar(500) DEFAULT NULL,
  `business` varchar(255) DEFAULT NULL,
  `industry` varchar(250) DEFAULT NULL,
  `isActive` int(11) DEFAULT '1',
  `isConfirmed` int(11) DEFAULT '-1',
  `REMARKS` varchar(5000) DEFAULT NULL,
  `doctype` varchar(45) DEFAULT NULL,
  `alloweduser` varchar(45) DEFAULT NULL,
  `roleid` int(2) DEFAULT NULL,
  `technology` varchar(20) DEFAULT NULL,
  `restriction` varchar(255) DEFAULT 'unrestricted',
  `userId` int(11) DEFAULT NULL,
  `att2` varchar(255) DEFAULT NULL,
  `att3` varchar(255) DEFAULT NULL,
  `att4` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_doc_file`
--

LOCK TABLES `t_doc_file` WRITE;
/*!40000 ALTER TABLE `t_doc_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_doc_file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_doc_fileparser`
--

DROP TABLE IF EXISTS `t_doc_fileparser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_doc_fileparser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` text,
  `fileId` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_doc_fileparser`
--

LOCK TABLES `t_doc_fileparser` WRITE;
/*!40000 ALTER TABLE `t_doc_fileparser` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_doc_fileparser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_doc_parseddata`
--

DROP TABLE IF EXISTS `t_doc_parseddata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_doc_parseddata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `parsedWord` text,
  `fileIds` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_doc_parseddata`
--

LOCK TABLES `t_doc_parseddata` WRITE;
/*!40000 ALTER TABLE `t_doc_parseddata` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_doc_parseddata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_doc_verticals`
--

DROP TABLE IF EXISTS `t_doc_verticals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_doc_verticals` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_doc_verticals`
--

LOCK TABLES `t_doc_verticals` WRITE;
/*!40000 ALTER TABLE `t_doc_verticals` DISABLE KEYS */;
INSERT INTO `t_doc_verticals` VALUES (1,'Industry'),(2,'Business'),(3,'Document Type'),(4,'Technology'),(5,'Restriction Level');
/*!40000 ALTER TABLE `t_doc_verticals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_doc_verticalvalues`
--

DROP TABLE IF EXISTS `t_doc_verticalvalues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_doc_verticalvalues` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `verticalid` int(11) NOT NULL,
  `values` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_doc_verticalvalues`
--

LOCK TABLES `t_doc_verticalvalues` WRITE;
/*!40000 ALTER TABLE `t_doc_verticalvalues` DISABLE KEYS */;
INSERT INTO `t_doc_verticalvalues` VALUES (1,1,'Consumer Goods'),(2,1,'IT'),(3,1,'Business Solution'),(4,1,'Others'),(5,2,'Sales'),(6,2,'HR'),(7,2,'Others'),(8,3,'Proposal Document'),(9,3,'Technical'),(10,3,'HR Others'),(11,3,'Others'),(12,4,'Node.js'),(13,4,'.Net'),(14,4,'Qlick'),(15,4,'Others'),(16,5,'Unrestricted'),(17,5,'Confidential'),(18,5,'Restricted');
/*!40000 ALTER TABLE `t_doc_verticalvalues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_errorlog`
--

DROP TABLE IF EXISTS `t_errorlog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_errorlog` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `errorNo` varchar(100) DEFAULT NULL,
  `errorDescription` varchar(1000) DEFAULT NULL,
  `logDate` datetime DEFAULT NULL,
  `userId` varchar(45) DEFAULT NULL,
  `attr1` varchar(45) DEFAULT NULL,
  `attr2` varchar(45) DEFAULT NULL,
  `attr3` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_errorlog`
--

LOCK TABLES `t_errorlog` WRITE;
/*!40000 ALTER TABLE `t_errorlog` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_errorlog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_holiday`
--

DROP TABLE IF EXISTS `t_holiday`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_holiday` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `holidayName` varchar(100) DEFAULT NULL,
  `holidayDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_holiday`
--

LOCK TABLES `t_holiday` WRITE;
/*!40000 ALTER TABLE `t_holiday` DISABLE KEYS */;
INSERT INTO `t_holiday` VALUES (1,'Happy New Year','01/01/2016'),(2,'hamari holi shi ho gyi','03/23/2016'),(3,'Gandhim Jayanti','10/15/2016'),(4,'ghjkh','03/10/2016'),(5,'jaggu','03/10/2016'),(6,'rter','03/09/2016'),(7,'sfsdfthgrh','03/09/2016'),(8,'sdfsdf','03/22/2016'),(9,'fsdfsd','03/23/2016'),(10,'fdgdfg','03/30/2016'),(11,'fgfdg','03/30/2016'),(12,'sfsd','03/30/2016'),(13,'asdad','03/29/2016'),(14,'yjyugf','03/30/2016');
/*!40000 ALTER TABLE `t_holiday` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_location`
--

DROP TABLE IF EXISTS `t_location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_location` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_location`
--

LOCK TABLES `t_location` WRITE;
/*!40000 ALTER TABLE `t_location` DISABLE KEYS */;
INSERT INTO `t_location` VALUES (1,'ghaziabad'),(2,'noida'),(3,'delhi'),(4,'mumbai'),(5,'chennai');
/*!40000 ALTER TABLE `t_location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_loginlogs`
--

DROP TABLE IF EXISTS `t_loginlogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_loginlogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(45) DEFAULT NULL,
  `loginTime` datetime DEFAULT NULL,
  `userIp` varchar(100) DEFAULT NULL,
  `mode` varchar(100) DEFAULT NULL,
  `logoutTime` datetime DEFAULT NULL,
  `Attr1` varchar(45) DEFAULT NULL,
  `Attr2` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_loginlogs`
--

LOCK TABLES `t_loginlogs` WRITE;
/*!40000 ALTER TABLE `t_loginlogs` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_loginlogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_loginroles`
--

DROP TABLE IF EXISTS `t_loginroles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_loginroles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roleName` varchar(200) DEFAULT NULL,
  `moduleId` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_loginroles`
--

LOCK TABLES `t_loginroles` WRITE;
/*!40000 ALTER TABLE `t_loginroles` DISABLE KEYS */;
INSERT INTO `t_loginroles` VALUES (1,'Admin',0),(2,'User',0),(3,'Client',0),(4,'Manager',0),(5,'Finance Manager',3),(6,'Approver',3);
/*!40000 ALTER TABLE `t_loginroles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_mailserverinfo`
--

DROP TABLE IF EXISTS `t_mailserverinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_mailserverinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `retailerId` int(11) DEFAULT NULL,
  `domainName` varchar(100) DEFAULT NULL,
  `domainUserName` varchar(200) DEFAULT NULL,
  `domainPassword` varchar(200) DEFAULT NULL,
  `port` int(11) DEFAULT NULL,
  `smtpMail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_mailserverinfo`
--

LOCK TABLES `t_mailserverinfo` WRITE;
/*!40000 ALTER TABLE `t_mailserverinfo` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_mailserverinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_mapuserassig`
--

DROP TABLE IF EXISTS `t_mapuserassig`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_mapuserassig` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `assId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_mapuserassig`
--

LOCK TABLES `t_mapuserassig` WRITE;
/*!40000 ALTER TABLE `t_mapuserassig` DISABLE KEYS */;
INSERT INTO `t_mapuserassig` VALUES (1,1,2),(7,4,2),(8,5,2),(11,2,2),(12,3,2);
/*!40000 ALTER TABLE `t_mapuserassig` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_master`
--

DROP TABLE IF EXISTS `t_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_master` (
  `code` int(11) NOT NULL AUTO_INCREMENT,
  `tablename` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_master`
--

LOCK TABLES `t_master` WRITE;
/*!40000 ALTER TABLE `t_master` DISABLE KEYS */;
INSERT INTO `t_master` VALUES (1,'Status'),(2,'Priority'),(3,'Severity'),(4,'Technology'),(5,'Type'),(6,'Currency'),(7,'Department'),(8,'Level');
/*!40000 ALTER TABLE `t_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_mastersdescription`
--

DROP TABLE IF EXISTS `t_mastersdescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_mastersdescription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(50) DEFAULT NULL,
  `description1` varchar(500) DEFAULT NULL,
  `description2` varchar(500) DEFAULT NULL,
  `description3` varchar(500) DEFAULT NULL,
  `description4` varchar(500) DEFAULT NULL,
  `description5` varchar(500) DEFAULT NULL,
  `createdDate` date DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastModifiedDate` date DEFAULT NULL,
  `lastModifiedBy` int(11) DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT NULL,
  `flag` tinyint(1) DEFAULT '0',
  `currencyType` varchar(45) DEFAULT 'Null',
  `currencyRate` double DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_mastersdescription`
--

LOCK TABLES `t_mastersdescription` WRITE;
/*!40000 ALTER TABLE `t_mastersdescription` DISABLE KEYS */;
INSERT INTO `t_mastersdescription` VALUES (1,'1','New',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-04',10,1,1,'Null',NULL,NULL),(2,'1','Open ',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-04',10,1,1,'Null',NULL,NULL),(4,'1','Close',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-04',10,0,1,'Null',NULL,NULL),(5,'6','INR',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-25',49,1,0,'Null',0,NULL),(9,'2','Medium',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-07',10,1,1,'',0,NULL),(12,'3','High',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-22',1,1,0,'Null',NULL,NULL),(14,'3','Low',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-02-04',110,1,0,'Null',NULL,NULL),(15,'4','Nodejs',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-25',49,1,0,'Null',NULL,NULL),(16,'4','Javascripts',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-23',1,1,0,'Null',NULL,NULL),(17,'4','Jquery',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-02-04',110,1,0,'Null',NULL,NULL),(18,'4','Qlik',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-23',1,1,0,'Null',NULL,NULL),(19,'5','Enhacement',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-23',1,1,0,'Null',NULL,NULL),(20,'6','USD',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-23',1,1,0,'Null',679,NULL),(21,'6','Rubel',NULL,NULL,NULL,NULL,'2016-02-04',110,'2016-03-22',1,1,0,'Null',123,NULL),(43,'7','IT',NULL,NULL,NULL,NULL,NULL,NULL,'2016-03-22',1,1,0,'',NULL,NULL),(44,'7','Sales',NULL,NULL,NULL,NULL,NULL,NULL,'2016-03-22',1,1,0,'',NULL,NULL),(45,'7','Admin',NULL,NULL,NULL,NULL,NULL,NULL,'2016-03-23',1,1,0,'',NULL,NULL),(66,'8','Developer',NULL,NULL,NULL,NULL,'2016-03-04',10,'2016-03-22',1,1,0,'Null',NULL,NULL),(68,'8','Team Lead',NULL,NULL,NULL,NULL,'2016-03-04',10,'2016-03-18',1,1,0,'Null',NULL,NULL),(79,'1','oldTst',NULL,NULL,NULL,NULL,'2016-03-07',10,'2016-03-23',1,1,0,'',NULL,NULL),(81,'6','dollar',NULL,NULL,NULL,NULL,'2016-03-07',10,'2016-03-22',1,1,0,'dollar',20,NULL),(82,'6','dinnar',NULL,NULL,NULL,NULL,'2016-03-07',10,'2016-03-22',1,1,0,'dinaar',20,NULL),(83,'3','lowest',NULL,NULL,NULL,NULL,'2016-03-07',10,'2016-03-22',1,1,0,'',NULL,NULL),(91,'8','Consultant',NULL,NULL,NULL,NULL,'2016-03-08',1,'2016-03-22',1,0,0,'',NULL,NULL),(92,'8','Supervisor',NULL,NULL,NULL,NULL,'2016-03-08',1,'2016-03-18',1,1,0,'',NULL,NULL),(94,'5','Bug',NULL,NULL,NULL,NULL,'2016-03-08',1,'2016-03-22',1,1,0,'',NULL,NULL),(96,'6','Dollar uk',NULL,NULL,NULL,NULL,'2016-03-08',10,'2016-03-22',1,1,0,NULL,34,NULL),(98,'2','highest',NULL,NULL,NULL,NULL,'2016-03-14',10,'2016-03-22',1,1,0,NULL,NULL,NULL),(127,'6','nepal rupey',NULL,NULL,NULL,NULL,'2016-03-22',1,'2016-03-22',1,1,0,NULL,0.7,NULL),(128,'6','americal doller',NULL,NULL,NULL,NULL,'2016-03-22',1,'2016-03-25',49,1,0,NULL,65,NULL),(129,'1','status',NULL,NULL,NULL,NULL,'2016-03-22',1,'2016-03-23',1,1,0,NULL,NULL,NULL),(130,'5','abcd',NULL,NULL,NULL,NULL,'2016-03-23',1,'2016-03-23',1,1,0,NULL,NULL,NULL),(131,'1','nnn',NULL,NULL,NULL,NULL,'2016-03-23',1,'2016-03-23',1,1,0,NULL,NULL,NULL),(132,'1','hf',NULL,NULL,NULL,NULL,'2016-03-23',1,'2016-03-23',1,1,0,NULL,NULL,NULL),(133,'1','gg',NULL,NULL,NULL,NULL,'2016-03-23',1,'2016-03-23',1,1,0,NULL,NULL,NULL),(134,'4','others',NULL,NULL,NULL,NULL,'2016-03-25',49,'2016-03-25',49,1,0,NULL,NULL,NULL),(135,'3','A-1',NULL,NULL,NULL,NULL,'2016-03-28',1,'2016-03-28',1,1,0,NULL,NULL,NULL),(136,'5','B-1',NULL,NULL,NULL,NULL,'2016-03-28',1,'2016-03-28',1,1,0,NULL,NULL,NULL),(137,'5','Bug',NULL,NULL,NULL,NULL,'2016-03-28',1,'2016-03-28',1,1,1,NULL,NULL,NULL),(138,'1','Fixed23',NULL,NULL,NULL,NULL,'2016-03-28',1,'2016-03-28',1,1,0,NULL,NULL,1),(139,'6','INR',NULL,NULL,NULL,NULL,'2016-03-28',1,'2016-03-28',1,1,0,NULL,23,1);
/*!40000 ALTER TABLE `t_mastersdescription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_portalmodules`
--

DROP TABLE IF EXISTS `t_portalmodules`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_portalmodules` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) NOT NULL,
  `publishedDate` datetime NOT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `lastModifiedBy` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_portalmodules`
--

LOCK TABLES `t_portalmodules` WRITE;
/*!40000 ALTER TABLE `t_portalmodules` DISABLE KEYS */;
INSERT INTO `t_portalmodules` VALUES (1,'Bug','0000-00-00 00:00:00',NULL,NULL,NULL),(2,'Time','0000-00-00 00:00:00',NULL,NULL,NULL),(3,'Expense','0000-00-00 00:00:00',NULL,NULL,NULL),(5,'Asset','0000-00-00 00:00:00',NULL,NULL,NULL),(6,'Document','0000-00-00 00:00:00',NULL,NULL,NULL);
/*!40000 ALTER TABLE `t_portalmodules` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_projectclientmapping`
--

DROP TABLE IF EXISTS `t_projectclientmapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_projectclientmapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `cname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_projectclientmapping`
--

LOCK TABLES `t_projectclientmapping` WRITE;
/*!40000 ALTER TABLE `t_projectclientmapping` DISABLE KEYS */;
INSERT INTO `t_projectclientmapping` VALUES (38,2,'1'),(39,3,'1'),(59,4,'2');
/*!40000 ALTER TABLE `t_projectclientmapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_projectdetails`
--

DROP TABLE IF EXISTS `t_projectdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_projectdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `retailerId` int(11) DEFAULT NULL,
  `projectTitle` varchar(300) DEFAULT NULL,
  `pcode` varchar(100) DEFAULT NULL,
  `ptype` varchar(100) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `plannedStartDate` varchar(200) DEFAULT NULL,
  `plannedEndDate` varchar(200) DEFAULT NULL,
  `actualStartDate` varchar(200) DEFAULT NULL,
  `actualEndDate` varchar(200) DEFAULT NULL,
  `pstatus` varchar(100) DEFAULT NULL,
  `pcomplexity` varchar(100) DEFAULT NULL,
  `plocation` varchar(100) DEFAULT NULL,
  `commercialHead` varchar(100) DEFAULT NULL,
  `accountHead` varchar(100) DEFAULT NULL,
  `manager` varchar(100) DEFAULT NULL,
  `teamLead` varchar(100) DEFAULT NULL,
  `isActive` int(11) DEFAULT NULL,
  `completed` varchar(100) DEFAULT NULL,
  `isBillable` varchar(100) DEFAULT NULL,
  `taxCode` varchar(100) DEFAULT NULL,
  `poNumber` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_projectdetails`
--

LOCK TABLES `t_projectdetails` WRITE;
/*!40000 ALTER TABLE `t_projectdetails` DISABLE KEYS */;
INSERT INTO `t_projectdetails` VALUES (1,1,'Times','s','1','sad','',NULL,NULL,NULL,'1','1','d','d','d','1','1',NULL,NULL,NULL,NULL,NULL),(2,1,'timesheet','ti_753','timeinmaterial','hgfdf dhgsdjhs usyds dytw','01/03/2016','09/03/2016','03/03/2016','31/03/2016','1','simple','3','2','1','1',NULL,1,'0','1','',''),(3,1,'Data Transfer','Da_918','timeinmaterial','Data transfer with out internet','01/03/2016','30/11/2016','09/03/2016','30/12/2016','1','complex','4','1','1','1',NULL,1,'01','1','',''),(4,1,'PMS','PM_763','timeinmaterial','','10/03/2016','29/03/2016','26/03/2016','31/03/2016','1','0','0','0','0','0',NULL,1,'34','1','65','565');
/*!40000 ALTER TABLE `t_projectdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_projectresourcemapping`
--

DROP TABLE IF EXISTS `t_projectresourcemapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_projectresourcemapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) DEFAULT NULL,
  `projectId` int(11) DEFAULT NULL,
  `createdBy` varchar(50) DEFAULT NULL,
  `modifiedBy` varchar(50) DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `modifiedDate` datetime DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_projectresourcemapping`
--

LOCK TABLES `t_projectresourcemapping` WRITE;
/*!40000 ALTER TABLE `t_projectresourcemapping` DISABLE KEYS */;
INSERT INTO `t_projectresourcemapping` VALUES (86,0,2,NULL,NULL,NULL,NULL,1),(87,0,3,NULL,NULL,NULL,NULL,1),(129,0,4,NULL,NULL,NULL,NULL,1);
/*!40000 ALTER TABLE `t_projectresourcemapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_projecttechnologymapping`
--

DROP TABLE IF EXISTS `t_projecttechnologymapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_projecttechnologymapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectId` int(11) DEFAULT NULL,
  `technologyId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_projecttechnologymapping`
--

LOCK TABLES `t_projecttechnologymapping` WRITE;
/*!40000 ALTER TABLE `t_projecttechnologymapping` DISABLE KEYS */;
INSERT INTO `t_projecttechnologymapping` VALUES (56,2,16),(57,3,15),(58,3,16),(97,4,15),(98,4,16);
/*!40000 ALTER TABLE `t_projecttechnologymapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_retailer`
--

DROP TABLE IF EXISTS `t_retailer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_retailer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `emailId` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `companyName` varchar(100) DEFAULT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `logo` varchar(500) DEFAULT NULL,
  `contactNo` varchar(45) DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_retailer`
--

LOCK TABLES `t_retailer` WRITE;
/*!40000 ALTER TABLE `t_retailer` DISABLE KEYS */;
INSERT INTO `t_retailer` VALUES (1,'avinash.gautam@polestarllp.com','asdfg','Polestar Solutions','Avinash','Gautam',NULL,'9876546777','2016-03-28 12:54:25'),(2,'deepak.singh@polestarllp.com','1','DataWorld','Deepak','Singh',NULL,'7894565555','2016-03-28 15:40:35');
/*!40000 ALTER TABLE `t_retailer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_retailermodulemapping`
--

DROP TABLE IF EXISTS `t_retailermodulemapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_retailermodulemapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `retailerId` int(10) DEFAULT NULL,
  `moduleId` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `retailerId` (`retailerId`),
  KEY `moduleId` (`moduleId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_retailermodulemapping`
--

LOCK TABLES `t_retailermodulemapping` WRITE;
/*!40000 ALTER TABLE `t_retailermodulemapping` DISABLE KEYS */;
INSERT INTO `t_retailermodulemapping` VALUES (1,1,1),(2,1,2),(3,1,3),(4,1,4),(5,1,6),(8,2,1),(9,2,2),(10,2,3),(11,2,5),(12,2,6);
/*!40000 ALTER TABLE `t_retailermodulemapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_retailersmtp`
--

DROP TABLE IF EXISTS `t_retailersmtp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_retailersmtp` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `retailerId` int(11) DEFAULT NULL,
  `domainName` varchar(100) DEFAULT NULL,
  `domainUserName` varchar(200) DEFAULT NULL,
  `domainPassword` varchar(200) DEFAULT NULL,
  `port` int(11) DEFAULT NULL,
  `smtpMail` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_retailersmtp`
--

LOCK TABLES `t_retailersmtp` WRITE;
/*!40000 ALTER TABLE `t_retailersmtp` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_retailersmtp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_technology`
--

DROP TABLE IF EXISTS `t_technology`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_technology` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `techName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_technology`
--

LOCK TABLES `t_technology` WRITE;
/*!40000 ALTER TABLE `t_technology` DISABLE KEYS */;
INSERT INTO `t_technology` VALUES (1,'nodejs'),(2,'php'),(3,'java');
/*!40000 ALTER TABLE `t_technology` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_attachment`
--

DROP TABLE IF EXISTS `t_tex_attachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_attachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseClaimeId` int(11) DEFAULT NULL,
  `filePath` varchar(200) DEFAULT 'null',
  `fileName` varchar(200) DEFAULT 'null',
  `orignalFileName` varchar(200) DEFAULT 'null',
  `uploadDate` datetime DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `modifiedDate` datetime DEFAULT NULL,
  `modifiedBy` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_attachment`
--

LOCK TABLES `t_tex_attachment` WRITE;
/*!40000 ALTER TABLE `t_tex_attachment` DISABLE KEYS */;
INSERT INTO `t_tex_attachment` VALUES (1,1,'/home/pssldel10202/new/new/Lemonade/public/attach/assetSettings_1459156258027.ejs','assetSettings_1459156258027.ejs','assetSettings.ejs','2016-03-28 14:40:52','2016-03-28 14:40:52',NULL,'2016-03-28 14:40:52',NULL),(2,2,'/home/pssldel10202/new/new/Lemonade/public/attach/error_1459157948223.ejs','error_1459157948223.ejs','error.ejs','2016-03-28 15:09:02','2016-03-28 15:09:02',NULL,'2016-03-28 15:09:02',NULL),(3,3,NULL,NULL,NULL,'2016-03-28 17:20:20','2016-03-28 17:20:20',NULL,'2016-03-28 17:20:20',NULL),(4,3,'/home/pssldel10202/new/new/Lemonade/public/attach/error_1459165841605.ejs','error_1459165841605.ejs','error.ejs','2016-03-28 17:20:36','2016-03-28 17:20:36',NULL,'2016-03-28 17:20:36',NULL);
/*!40000 ALTER TABLE `t_tex_attachment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_expenseclaime`
--

DROP TABLE IF EXISTS `t_tex_expenseclaime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_expenseclaime` (
  `expenseclaimId` int(11) NOT NULL AUTO_INCREMENT,
  `fromdate` varchar(100) DEFAULT NULL,
  `toDate` varchar(100) DEFAULT NULL,
  `totalExpense` int(11) DEFAULT NULL,
  `anyFile` varchar(200) DEFAULT 'null',
  `Submitted` int(11) DEFAULT NULL,
  `ClaimedStatus` int(11) DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `modifyDate` datetime DEFAULT NULL,
  `modifiedBy` int(11) DEFAULT NULL,
  `ledgerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`expenseclaimId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_expenseclaime`
--

LOCK TABLES `t_tex_expenseclaime` WRITE;
/*!40000 ALTER TABLE `t_tex_expenseclaime` DISABLE KEYS */;
INSERT INTO `t_tex_expenseclaime` VALUES (1,'2016-03-28 14:40:31','2016-03-28 14:40:31',4000,'ggdftsafdtsad hsfdsghfds shgfgsdf sghdfs',1,0,'2016-03-28 14:40:31',1,'2016-03-28 14:40:31',1,NULL),(2,'2016-03-28 15:08:42','2016-03-28 15:08:42',3000,'cscxscfg sghvshvt ygsfshx shgvsbx shgdfsh sxhs xsx',1,100,'2016-03-28 15:08:42',2,'2016-03-28 15:08:42',4,NULL),(3,'2016-03-28 17:20:12','2016-03-28 17:20:12',3000,'hgdfgshfdgh sjdgjsajd kjsakdjnakj iksakjsjskd kjnskja ikasdkkksk',1,100,'2016-03-28 17:20:12',2,'2016-03-28 17:20:12',4,NULL);
/*!40000 ALTER TABLE `t_tex_expenseclaime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_expensesubtable`
--

DROP TABLE IF EXISTS `t_tex_expensesubtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_expensesubtable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expId` int(11) DEFAULT NULL,
  `expenseType` int(11) DEFAULT NULL,
  `currencyId` int(11) DEFAULT NULL,
  `totalExpense` int(11) DEFAULT NULL,
  `fromDate` varchar(100) DEFAULT 'null',
  `toDate` varchar(45) DEFAULT 'null',
  `expenseclaimId` int(11) DEFAULT NULL,
  `tripAssignment` int(11) DEFAULT NULL,
  `anyFile` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_expensesubtable`
--

LOCK TABLES `t_tex_expensesubtable` WRITE;
/*!40000 ALTER TABLE `t_tex_expensesubtable` DISABLE KEYS */;
INSERT INTO `t_tex_expensesubtable` VALUES (1,1,1,20,4000,'16.03.2016','17.03.2016',1,1,'assetSettings_1459156258027.ejs'),(2,2,1,20,3000,'03.03.2016','09.03.2016',2,1,'error_1459157948223.ejs'),(3,3,1,21,3000,'10.03.2016','17.03.2016',3,1,'error_1459165841605.ejs');
/*!40000 ALTER TABLE `t_tex_expensesubtable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_foodexpense`
--

DROP TABLE IF EXISTS `t_tex_foodexpense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_foodexpense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseId` int(11) DEFAULT NULL,
  `reason` varchar(500) DEFAULT 'null',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_foodexpense`
--

LOCK TABLES `t_tex_foodexpense` WRITE;
/*!40000 ALTER TABLE `t_tex_foodexpense` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_tex_foodexpense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_hotelexpense`
--

DROP TABLE IF EXISTS `t_tex_hotelexpense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_hotelexpense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseId` int(11) DEFAULT NULL,
  `hotelName` varchar(200) DEFAULT 'null',
  `reason` varchar(500) DEFAULT 'null',
  `ifNotThenOther` varchar(200) DEFAULT 'null',
  `ratePerDay` int(11) DEFAULT NULL,
  `totalDay` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_hotelexpense`
--

LOCK TABLES `t_tex_hotelexpense` WRITE;
/*!40000 ALTER TABLE `t_tex_hotelexpense` DISABLE KEYS */;
INSERT INTO `t_tex_hotelexpense` VALUES (1,1,'10','hfsghdgsa','no',200,20),(2,1,'10','ssdffsf','no',300,10),(3,1,'9','hggsffd','no',500,6);
/*!40000 ALTER TABLE `t_tex_hotelexpense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_master`
--

DROP TABLE IF EXISTS `t_tex_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_master` (
  `code` int(11) NOT NULL AUTO_INCREMENT,
  `tableName` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_master`
--

LOCK TABLES `t_tex_master` WRITE;
/*!40000 ALTER TABLE `t_tex_master` DISABLE KEYS */;
INSERT INTO `t_tex_master` VALUES (1,'ExpenseType'),(2,'HotelType'),(3,'TravelType');
/*!40000 ALTER TABLE `t_tex_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_masterdescription`
--

DROP TABLE IF EXISTS `t_tex_masterdescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_masterdescription` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` int(11) DEFAULT NULL,
  `createdDate` datetime DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `modifyDate` datetime DEFAULT NULL,
  `modifiedBy` int(11) DEFAULT NULL,
  `isActive` int(11) DEFAULT NULL,
  `description` varchar(200) DEFAULT 'null',
  `minimumBillableMandetory` int(11) DEFAULT NULL,
  `maximumBillableMandetory` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_masterdescription`
--

LOCK TABLES `t_tex_masterdescription` WRITE;
/*!40000 ALTER TABLE `t_tex_masterdescription` DISABLE KEYS */;
INSERT INTO `t_tex_masterdescription` VALUES (1,1,'2016-03-01 10:06:36',1,'2016-03-01 10:06:36',1,1,'Hotel',1,5000),(2,1,'2016-03-01 10:07:20',1,'2016-03-01 10:07:20',1,1,'Travel',1,500),(3,1,'2016-03-01 10:07:51',1,'2016-03-01 10:07:51',1,1,'Food & Entertainment',1,2000),(4,1,'2016-03-01 10:08:14',1,'2016-03-01 10:08:14',1,1,'Phone',1,500),(5,1,'2016-03-01 10:12:38',1,'2016-03-01 10:12:38',1,1,'Reimbursement for Self-driven Vehicle',1,5000),(6,1,'2016-03-01 10:13:44',1,'2016-03-01 10:13:44',1,1,'Per Diem',1,2000),(7,1,'2016-03-01 10:14:26',1,'2016-03-01 10:14:26',1,1,'Other',1,1000),(9,2,'2016-03-01 10:16:06',1,'2016-03-01 10:16:06',1,1,'Red Fox hotel',1,5000),(10,2,'2016-03-01 10:16:52',1,'2016-03-01 10:16:52',1,1,'Radisson Blue',1,4000),(11,2,'2016-03-01 10:17:37',1,'2016-03-01 10:17:37',1,1,'Le Meridien ',1,2000),(12,2,'2016-03-01 10:18:02',1,'2016-03-01 10:18:02',1,1,'WelcomHotel Dwarka',1,2000),(13,3,'2016-03-01 10:18:36',1,'2016-03-01 10:18:36',1,1,'Taxi',1,500),(14,3,'2016-03-01 10:19:03',1,'2016-03-07 14:12:50',35,1,'Train',1,400),(15,3,'2016-03-01 10:19:25',1,'2016-03-01 10:19:25',1,1,'Bus',1,200),(120,0,'2016-03-01 10:09:29',1,'2016-03-01 10:09:29',1,1,'Phone',1,500),(121,2,'2016-03-07 11:51:12',10,'2016-03-18 11:58:13',1,0,'h',1,340),(122,1,'2016-03-07 13:17:22',10,'2016-03-28 14:00:25',1,1,'asd',1,500),(123,1,'2016-03-11 15:02:12',1,'2016-03-11 15:02:12',1,1,'asdsddcx',1,2343),(124,3,'2016-03-17 18:08:23',1,'2016-03-17 18:08:23',1,1,'Air',1,1000),(125,2,'2016-03-18 12:15:11',1,'2016-03-18 12:15:11',1,1,'PBR',1,5000),(126,2,'2016-03-18 12:21:06',1,'2016-03-18 12:21:06',1,1,'Imperial New Delhi',1,500);
/*!40000 ALTER TABLE `t_tex_masterdescription` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_otherexpense`
--

DROP TABLE IF EXISTS `t_tex_otherexpense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_otherexpense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseId` int(11) DEFAULT NULL,
  `reason` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_otherexpense`
--

LOCK TABLES `t_tex_otherexpense` WRITE;
/*!40000 ALTER TABLE `t_tex_otherexpense` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_tex_otherexpense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_perdiemexpense`
--

DROP TABLE IF EXISTS `t_tex_perdiemexpense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_perdiemexpense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseId` int(11) DEFAULT NULL,
  `hotalName` varchar(200) DEFAULT 'null',
  `reason` varchar(500) DEFAULT 'null',
  `perDiemRate` int(11) DEFAULT NULL,
  `ifNotThenOther` varchar(200) DEFAULT 'null',
  `totalDays` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_perdiemexpense`
--

LOCK TABLES `t_tex_perdiemexpense` WRITE;
/*!40000 ALTER TABLE `t_tex_perdiemexpense` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_tex_perdiemexpense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_phoneexpense`
--

DROP TABLE IF EXISTS `t_tex_phoneexpense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_phoneexpense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseId` int(11) DEFAULT NULL,
  `reason` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_phoneexpense`
--

LOCK TABLES `t_tex_phoneexpense` WRITE;
/*!40000 ALTER TABLE `t_tex_phoneexpense` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_tex_phoneexpense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_rsdexpense`
--

DROP TABLE IF EXISTS `t_tex_rsdexpense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_rsdexpense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseId` int(11) DEFAULT NULL,
  `typeOfVehicle` varchar(200) DEFAULT 'null',
  `reason` varchar(500) DEFAULT 'null',
  `perkmRate` int(11) DEFAULT NULL,
  `ifNotThenOther` varchar(200) DEFAULT 'null',
  `totalKmTravel` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_rsdexpense`
--

LOCK TABLES `t_tex_rsdexpense` WRITE;
/*!40000 ALTER TABLE `t_tex_rsdexpense` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_tex_rsdexpense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_transcation`
--

DROP TABLE IF EXISTS `t_tex_transcation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_transcation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `approvelId` int(11) DEFAULT NULL,
  `Status` int(11) DEFAULT NULL,
  `remark` varchar(200) DEFAULT 'null',
  `headerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_transcation`
--

LOCK TABLES `t_tex_transcation` WRITE;
/*!40000 ALTER TABLE `t_tex_transcation` DISABLE KEYS */;
INSERT INTO `t_tex_transcation` VALUES (1,NULL,0,'null',1),(2,3,1,'hhja jasdhasjdb assdfhasd ahsghdjsa hasdfhsag hashfdhgas',2),(3,4,1,'hdfsga skdhsk s  sdsjad kjddksjd kskjjsdjs kjdjhsjka',2),(4,3,1,'hgdgsadfgasfdg djasgdja jsdsjasd',3),(5,1,1,'shfdghsafdghs jhsdh sjshddsh sjshdh gydfsyt dfsyt gsfdd',3),(6,4,1,'ghdsgxgfs jshdgsj jhhhsjkk kjjskjjhsk lkjsdks kjssdjs kjshdksj dkjshdkjsk kjsdkskd kjskdjks kjsdjks kjsdks kjsd',3);
/*!40000 ALTER TABLE `t_tex_transcation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_tex_travelexpense`
--

DROP TABLE IF EXISTS `t_tex_travelexpense`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_tex_travelexpense` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `expenseId` int(11) DEFAULT NULL,
  `travelType` varchar(200) DEFAULT 'null',
  `reason` varchar(500) DEFAULT 'null',
  `ifNotThenOther` varchar(200) DEFAULT 'null',
  `ratePerDay` int(11) DEFAULT NULL,
  `totalDay` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_tex_travelexpense`
--

LOCK TABLES `t_tex_travelexpense` WRITE;
/*!40000 ALTER TABLE `t_tex_travelexpense` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_tex_travelexpense` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_time_intervalbyretailer`
--

DROP TABLE IF EXISTS `t_time_intervalbyretailer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_time_intervalbyretailer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `retailerId` int(11) DEFAULT NULL,
  `periods` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_time_intervalbyretailer`
--

LOCK TABLES `t_time_intervalbyretailer` WRITE;
/*!40000 ALTER TABLE `t_time_intervalbyretailer` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_time_intervalbyretailer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_time_statusmaster`
--

DROP TABLE IF EXISTS `t_time_statusmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_time_statusmaster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_time_statusmaster`
--

LOCK TABLES `t_time_statusmaster` WRITE;
/*!40000 ALTER TABLE `t_time_statusmaster` DISABLE KEYS */;
INSERT INTO `t_time_statusmaster` VALUES (1,'Draft'),(2,'Active'),(3,'Pending for Approval'),(4,'Approved'),(5,'Rejected');
/*!40000 ALTER TABLE `t_time_statusmaster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_time_timesheet`
--

DROP TABLE IF EXISTS `t_time_timesheet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_time_timesheet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `retailerId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `fillDate` datetime DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `day` varchar(45) DEFAULT NULL,
  `totalHours` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `supervisor` varchar(45) DEFAULT NULL,
  `approvedOrRejectedBy` varchar(45) DEFAULT NULL,
  `approvedOrRejectedDate` varchar(45) DEFAULT NULL,
  `rejectionReason` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_time_timesheet`
--

LOCK TABLES `t_time_timesheet` WRITE;
/*!40000 ALTER TABLE `t_time_timesheet` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_time_timesheet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_time_timesheetassignment`
--

DROP TABLE IF EXISTS `t_time_timesheetassignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_time_timesheetassignment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `timeAssignmentId` int(11) DEFAULT NULL,
  `wbsId` int(11) DEFAULT NULL,
  `timeSheetId` int(11) DEFAULT NULL,
  `Day1` int(11) DEFAULT NULL,
  `Day2` int(11) DEFAULT NULL,
  `Day3` int(11) DEFAULT NULL,
  `Day4` int(11) DEFAULT NULL,
  `Day5` int(11) DEFAULT NULL,
  `Day6` int(11) DEFAULT NULL,
  `Day7` int(11) DEFAULT NULL,
  `Day8` int(11) DEFAULT NULL,
  `Day9` int(11) DEFAULT NULL,
  `Day10` int(11) DEFAULT NULL,
  `Day11` int(11) DEFAULT NULL,
  `Day12` int(11) DEFAULT NULL,
  `Day13` int(11) DEFAULT NULL,
  `Day14` int(11) DEFAULT NULL,
  `Day15` int(11) DEFAULT NULL,
  `Day16` int(11) DEFAULT NULL,
  `Day17` int(11) DEFAULT NULL,
  `Day18` int(11) DEFAULT NULL,
  `Day19` int(11) DEFAULT NULL,
  `Day20` int(11) DEFAULT NULL,
  `Day21` int(11) DEFAULT NULL,
  `Day22` int(11) DEFAULT NULL,
  `Day23` int(11) DEFAULT NULL,
  `Day24` int(11) DEFAULT NULL,
  `Day25` int(11) DEFAULT NULL,
  `Day26` int(11) DEFAULT NULL,
  `Day27` int(11) DEFAULT NULL,
  `Day28` int(11) DEFAULT NULL,
  `Day29` int(11) DEFAULT NULL,
  `Day30` int(11) DEFAULT NULL,
  `Day31` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_time_timesheetassignment`
--

LOCK TABLES `t_time_timesheetassignment` WRITE;
/*!40000 ALTER TABLE `t_time_timesheetassignment` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_time_timesheetassignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_timesheet_workschedule`
--

DROP TABLE IF EXISTS `t_timesheet_workschedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_timesheet_workschedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `retailerId` int(11) NOT NULL,
  `schedule` int(11) NOT NULL,
  `startDate` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_timesheet_workschedule`
--

LOCK TABLES `t_timesheet_workschedule` WRITE;
/*!40000 ALTER TABLE `t_timesheet_workschedule` DISABLE KEYS */;
/*!40000 ALTER TABLE `t_timesheet_workschedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_userdetails`
--

DROP TABLE IF EXISTS `t_userdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_userdetails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(200) DEFAULT NULL,
  `lastName` varchar(200) DEFAULT NULL,
  `userEmail` varchar(200) DEFAULT NULL,
  `contactNumber` varchar(20) DEFAULT NULL,
  `userPassword` varchar(100) DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  `managerId` int(11) DEFAULT NULL,
  `createdDate` varchar(200) DEFAULT NULL,
  `createdBy` int(11) DEFAULT NULL,
  `lastModifiedDate` varchar(200) DEFAULT NULL,
  `lastModifiedBy` int(11) DEFAULT NULL,
  `isClient` tinyint(1) DEFAULT '0',
  `clientId` tinyint(1) DEFAULT NULL,
  `isValidated` tinyint(1) DEFAULT '0',
  `isActive` tinyint(1) DEFAULT '1',
  `isBillable` tinyint(1) DEFAULT '0',
  `billingAmount` varchar(11) DEFAULT '0',
  `defaultModuleId` int(11) DEFAULT '0',
  `crole_id` int(11) DEFAULT '1',
  `attr2` varchar(100) DEFAULT NULL,
  `attr3` varchar(100) DEFAULT NULL,
  `isApproval` tinyint(4) DEFAULT '0',
  `approveLimit` int(11) DEFAULT '0',
  `doj` varchar(200) DEFAULT NULL,
  `dob` varchar(200) DEFAULT NULL,
  `doc` varchar(200) DEFAULT NULL,
  `ecode` varchar(100) DEFAULT NULL,
  `designation` int(11) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `modules` varchar(50) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `rtype` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `retailerId` (`retailerId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_userdetails`
--

LOCK TABLES `t_userdetails` WRITE;
/*!40000 ALTER TABLE `t_userdetails` DISABLE KEYS */;
INSERT INTO `t_userdetails` VALUES (1,'Avinash','Gautam','avinash.gautam@polestarllp.com','9876546777','asdfg',1,1,NULL,'2016-03-28 12:54:25',NULL,'2016-03-28 12:54:25',NULL,0,0,1,1,0,'0',0,1,NULL,NULL,1,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(2,'jogi','singh','jogi@gmail.com','9876787687','1',2,1,3,'2016-03-28 14:11:04',1,'2016-03-28 14:11:04',1,0,NULL,1,1,1,'0',3,1,NULL,NULL,1,0,'','','','1109',43,66,NULL,NULL,NULL),(3,'satendra','singh','satendra@gmail.com','97874636363','1',4,1,1,'2016-03-28 14:52:13',1,'2016-03-28 14:52:13',1,0,NULL,1,1,1,'0',1,1,NULL,NULL,1,0,'','','','6262',43,68,NULL,NULL,NULL),(4,'fine','exp','fine@gmail.com','98767676767','1',5,1,1,'2016-03-28 14:56:32',1,'2016-03-28 14:56:32',1,0,NULL,1,1,1,'0',1,1,NULL,NULL,1,0,'','','','4300',43,92,NULL,NULL,NULL),(5,'Deepak','Singh','deepak.singh@polestarllp.com','7894565555','1',1,2,NULL,'2016-03-28 15:40:36',NULL,'2016-03-28 15:40:36',NULL,0,0,1,1,0,'0',0,1,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,'wer','wer','g','','1',1,1,4,'2016-03-28 17:02:44',1,'2016-03-28 17:02:44',1,0,NULL,1,1,1,'0',1,1,NULL,NULL,1,0,'','','','qweeq12121',0,0,NULL,NULL,NULL),(7,'ss','sss','s@f.vom','','zSyea42jb6',1,1,0,'2016-03-28 17:29:35',1,'2016-03-28 17:29:35',1,0,NULL,0,1,1,'0',2,1,NULL,NULL,1,0,'','','','65',0,0,NULL,NULL,NULL);
/*!40000 ALTER TABLE `t_userdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_usermodulemapping`
--

DROP TABLE IF EXISTS `t_usermodulemapping`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_usermodulemapping` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(10) DEFAULT NULL,
  `moduleId` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `retailerId` (`userId`),
  KEY `moduleId` (`moduleId`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_usermodulemapping`
--

LOCK TABLES `t_usermodulemapping` WRITE;
/*!40000 ALTER TABLE `t_usermodulemapping` DISABLE KEYS */;
INSERT INTO `t_usermodulemapping` VALUES (1,2,1),(2,2,2),(3,2,3),(4,2,6),(8,3,1),(9,3,2),(10,3,3),(11,3,6),(15,4,1),(16,4,2),(17,4,3),(18,4,6),(22,6,1),(23,6,2),(24,6,3),(25,6,6),(29,7,1),(30,7,2);
/*!40000 ALTER TABLE `t_usermodulemapping` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_wbs`
--

DROP TABLE IF EXISTS `t_wbs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `t_wbs` (
  `WBSId` int(11) NOT NULL AUTO_INCREMENT,
  `WBSName` varchar(45) DEFAULT NULL,
  `WBSCode` varchar(45) DEFAULT NULL,
  `projectId` int(11) DEFAULT NULL,
  `WBSOwner` varchar(45) DEFAULT NULL,
  `wplannedStartDate` varchar(45) DEFAULT NULL,
  `wplannedEndDate` varchar(45) DEFAULT NULL,
  `wactualStartDate` varchar(45) DEFAULT NULL,
  `wactualEndDate` varchar(45) DEFAULT NULL,
  `estimateEffort` varchar(45) DEFAULT NULL,
  `WBSStatus` varchar(45) DEFAULT NULL,
  `WBSLocation` varchar(45) DEFAULT NULL,
  `retailerId` int(11) DEFAULT NULL,
  PRIMARY KEY (`WBSId`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_wbs`
--

LOCK TABLES `t_wbs` WRITE;
/*!40000 ALTER TABLE `t_wbs` DISABLE KEYS */;
INSERT INTO `t_wbs` VALUES (1,'time2','ti_790',2,'2','04/03/2016','30/03/2016','01/03/2016','31/03/2016','70','1','2',1),(2,'Data 1','Da_504',3,'1','01/03/2016','31/05/2016','16/03/2016','25/05/2016','3','1','2',1),(3,'Data 2','Da_78',3,'1','01/04/2016','30/04/2016','04/04/2016','29/04/2016','5','1','4',1),(4,'Data 3','Da_193',3,'1','22/04/2016','26/05/2016','29/04/2016','14/05/2016','4','1','5',1),(5,'time_t','ti_883',2,'1','01/03/2016','27/05/2016','09/03/2016','27/04/2016','8','1','4',1),(6,'wbs1','wb_704',3,'1','09/03/2016','24/03/2016','25/03/2016','31/03/2016','','1',NULL,1),(7,'PMSTest','PM_635',4,'0','','','','','','1','0',1);
/*!40000 ALTER TABLE `t_wbs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'portal'
--

--
-- Dumping routines for database 'portal'
--
/*!50003 DROP PROCEDURE IF EXISTS `atemp_usp_createRetailerUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `atemp_usp_createRetailerUser`(isbill int,
expense int,inNum int,inId int,
infirstName varchar(200),inlastName varchar(200),inemailId varchar(200),
incontactNumber varchar(20),inbillingRate varchar(20),inuserRole int,
inmanager varchar(20),in defaultModule varchar(50),inCustomRole int,inpassword varchar(20), 	
in inecode varchar(100), in indesignation int(11),
 in inlevel int(11), in inmodules varchar(50),
in indoj varchar(50), in indob varchar(50), in indoc varchar(50),
in inrtype varchar(20),inuserId int,inroleId int,in retailerId int,in croleid int
)
BEGIN

Select count(1) from t_userdetails where userEmail=inemailId and id !=inId into @ifExist;
Select case when inmanager='' then 0 else inmanager end into @mgr
;

if @ifExist=0 THEN
Select id from t_portalmodules where id=defaultModule into @indefaultModuleId;

if inId =0 then


INSERT INTO `portal`.`t_userdetails`
(
`firstName`,
`lastName`,
`userEmail`,
`contactNumber`,
`userPassword`,
`roleId`,
`retailerId`,
`managerId`,
`createdDate`,
`createdBy`,
`lastModifiedDate`,
`lastModifiedBy`,
`isBillable`,
`billingAmount`,
`isApproval`,
`approveLimit`,
`defaultModuleId`,
`doj`,
`dob`,
`doc`,
`ecode`,
`designation`,
   `level`,
   `rtype`,`crole_id`
)
VALUES
(infirstName,inlastName,inemailId,incontactNumber,inpassword,inuserRole,
retailerId,@mgr,now(),inuserId,now(),inuserId,isbill,inbillingRate,
expense,inNum,
@indefaultModuleId
,indoj,indob,indoc,
inecode,indesignation,inlevel,inrtype,croleid);

set @uid=LAST_INSERT_ID();

call usp_split_nr(inmodules,',','tempModules');
INSERT INTO `t_usermodulemapping`
(
`userId`,
`moduleId`)
Select @uid,p.id from t_portalmodules p 
inner join tempModules t on trim(p.id)=trim(t.variable) ;

Set  @ifExist=0;

set @uid=LAST_INSERT_ID();
select @uid as uid;

ELSE
call usp_split_nr(inmodules,',','tempModules');
INSERT INTO `t_usermodulemapping`
(
`userId`,
`moduleId`)
Select retailerId,p.id from t_portalmodules p 
inner join tempModules t on trim(p.id)=trim(t.variable) ;


UPDATE `portal`.`t_userdetails`
SET
`firstName` =infirstName,
`lastName` = inlastName,
`userEmail` = inemailId,
`contactNumber` = incontactNumber, 
`roleId` =inuserRole,
`managerId` = @mgr,
`lastModifiedDate` =now(),
`lastModifiedBy` = inuserId,
`isBillable` = isbill,
`billingAmount` =inbillingRate,
`defaultModuleId` =@indefaultModuleId,
`isApproval` = expense,
`approveLimit` = inNum,
`designation` = indesignation,
`level` = inlevel,

`rtype` = inrtype

WHERE `id` = inId;
Set  @ifExist=1;
select inId as uid;
end if;
else
Set  @ifExist=2;
end if;

Select  @ifExist as flag;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Ex_DeleteExpense` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `Ex_DeleteExpense`( expenseid int, exId int,expensecid int,userId int)
BEGIN
if expenseid=1
then 
delete from t_tex_expensesubtable where expId=exId and expenseType=expenseid;
delete from t_tex_hotelexpense where id=exId;
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,userId,expensecid); 
end if;
if expenseid=2
then 
delete from t_tex_expensesubtable where expId=exId and expenseType=expenseid;
delete from t_tex_travelexpense where id=exId;
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,userId,expensecid); 
end if;
if expenseid=3
then 
delete from t_tex_expensesubtable where expId=exId and expenseType=expenseid;
delete from t_tex_foodexpense where id=exId;
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,userId,expensecid); 
end if;
if expenseid=4
then 
delete from t_tex_expensesubtable where expId=exId and expenseType=expenseid;
delete from t_tex_phoneexpense where id=exId;
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,userId,expensecid); 
end if;
if expenseid=5
then 
delete from t_tex_expensesubtable where expId=exId and expenseType=expenseid;
delete from t_tex_rsdexpense where id=exId;
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,userId,expensecid); 
end if;
if expenseid=6
then 
delete from t_tex_expensesubtable where expId=exId and expenseType=expenseid;
delete from t_tex_perdiemexpense where id=exId;
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,userId,expensecid); 
end if;
if expenseid=7
then 
delete from t_ex_expensesubtable where expId=exId and expenseType=expenseid;
delete from t_ex_otherexpense where id=exId;
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,userId,expensecid); 
end if;
call Ex_getExpenseType(userId);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Ex_getExpensemasterById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `Ex_getExpensemasterById`(ids int,code1 int)
BEGIN
SELECT * FROM t_tex_masterdescription where code=code1 and id=ids;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Ex_getExpenseType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `Ex_getExpenseType`(userId int)
BEGIN
set @a=(SELECT roleID FROM t_userdetails where id=userId);
SELECT * FROM t_tex_masterdescription where code=1 and isActive=1;
SELECT w.WBSName as tripAssignment,msd.description,sub.expId,sub.id,sub.expenseType,sub.anyFile,ex.ClaimedStatus
,ex.Submitted,ex.expenseclaimId,sub.fromdate,sub.toDate,sub.totalExpense FROM 
t_tex_expensesubtable as sub inner join t_tex_masterdescription as msd on sub.expenseType=msd.id 
 inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId inner join t_wbs as w 
on w.WBSId=sub.tripAssignment where ex.createdBy=userId and Submitted=1 and YEARWEEK(ex.createdDate)=YEARWEEK(NOW());
SELECT id,description1 FROM t_mastersdescription where code=1;
SELECT totalExpense as sum from t_tex_expenseclaime where createdBy=userId;

if @a=1
then
SELECT DISTINCT u.userEmail,u.id,u.lastName,u.firstName,t.Status FROM t_userdetails as u inner join t_tex_expenseclaime as c on u.id=c.createdBy inner join t_tex_transcation as t on c.expenseclaimId=t.headerId where t.Status in (0,1)and  t.approvelId=userId;
end if;
if @a=5
then
SELECT DISTINCT u.userEmail,u.id,u.lastName,u.firstName,t.Status FROM t_userdetails as u inner join t_tex_expenseclaime as c on u.id=c.createdBy inner join t_tex_transcation as t on c.expenseclaimId=t.headerId where t.Status in (0,1)and  t.approvelId=userId;
end if;
if @a=4
then
SELECT u.id,u.userEmail,u.lastName,u.firstName,t.Status FROM t_userdetails as u inner join t_tex_expenseclaime as c on u.id=c.createdBy inner join t_tex_transcation as t on c.expenseclaimId=t.headerId where t.Status in (0,1)and t.approvelId=userId and managerId =userId union 
SELECT u.id,u.userEmail,u.lastName,u.firstName,t.Status FROM t_userdetails as u inner join t_tex_expenseclaime as c on u.id=c.createdBy inner join t_tex_transcation as t on c.expenseclaimId=t.headerId where t.Status in (0,1)and t.approvelId=userId and managerId in (SELECT id FROM t_userdetails where managerId = userId)
union
SELECT u.id,u.userEmail,u.lastName,u.firstName,t.Status FROM t_userdetails as u inner join t_tex_expenseclaime as c on u.id=c.createdBy inner join t_tex_transcation as t on c.expenseclaimId=t.headerId where t.Status in (0,1)and t.approvelId=userId and managerId in(SELECT id FROM t_userdetails where managerId in (SELECT id FROM t_userdetails where managerId =userId))
union
SELECT u.id,u.userEmail,u.lastName,u.firstName,t.Status FROM t_userdetails as u inner join t_tex_expenseclaime as c on u.id=c.createdBy inner join t_tex_transcation as t on c.expenseclaimId=t.headerId where t.Status in (0,1)and t.approvelId=userId and  managerId in  (Select id FROM t_userdetails where managerId in(SELECT id FROM t_userdetails where managerId in (SELECT id FROM t_userdetails where managerId =userId)));
end if;
if @a=2 or @a=3
then
SELECT id,firstName,lastName FROM t_userdetails where managerId=userId ;
end if;
#SELECT WBSId, WBSName FROM t_wbs as w inner join t_userdetails as u on w.WBSOwner=u.firstname where u.id=userId;
SELECT w.WBSId,w.WBSName FROM portal.t_projectdetails as pro
 inner join t_projectresourcemapping as map on pro.id=map.ProjectId 
inner join t_wbs w on pro.id=w.projectId where map.userId=userId;
SELECT * FROM t_tex_masterdescription where code=2;
SELECT * FROM t_tex_masterdescription where code=3;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Ex_getExpenseTypeforUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `Ex_getExpenseTypeforUser`(userId int,role int,date1 varchar(50),mgId int)
BEGIN
set @a=(SELECT isApproval FROM t_userdetails where id=mgId);
set @b=(SELECT approveLimit FROM t_userdetails where id=mgId);
if role=5 and @a=1
then
SELECT msd.userEmail,ts.id,ts.Status,msd.firstName,ex.Submitted,ex.expenseclaimId,ex.ClaimedStatus,ex.fromdate,ex.toDate,ex.totalExpense FROM t_userdetails as msd inner join t_tex_expenseclaime as ex on ex.createdBy=msd.id inner join t_tex_transcation as ts on ts.headerId=ex.expenseclaimId   where ex.createdBy=userId and ex.Submitted=1 and ts.approvelId=mgId  and YEARWEEK(ex.createdDate)=YEARWEEK(date1);
end if;
if role=4 and  @a=1
then
SELECT msd.userEmail,ts.id,ts.Status,msd.firstName,ex.Submitted,ex.expenseclaimId,ex.ClaimedStatus,ex.fromdate,ex.toDate,ex.totalExpense FROM t_userdetails as msd inner join t_tex_expenseclaime as ex on ex.createdBy=msd.id inner join t_tex_transcation as ts on ts.headerId=ex.expenseclaimId where ex.createdBy=userId and ex.Submitted=1 and totalExpense>=@b and  ClaimedStatus>=0 and ts.approvelId=mgId  and YEARWEEK(ex.createdDate)=YEARWEEK(date1);
end if;
if role=6
then
SELECT msd.userEmail,msd.firstName,ex.Submitted,ex.expenseclaimId,ex.ClaimedStatus,ex.fromdate,ex.toDate,ex.totalExpense FROM t_userdetails as msd inner join t_tex_expenseclaime as ex on ex.createdBy=msd.id where ex.createdBy=userId and ex.Submitted=1 and ((totalExpense>1000 and  ClaimedStatus>1)or(totalExpense<1000 and claimedStatus>0)) and YEARWEEK(ex.createdDate)=YEARWEEK(date1);
end if;
if role=1
then
#SELECT msd.userEmail,msd.firstName,ex.Submitted,ex.expenseclaimId,ex.ClaimedStatus,ex.fromdate,ex.toDate,ex.totalExpense FROM t_userdetails as msd inner join t_tex_expenseclaime as ex on ex.createdBy=msd.id where ex.createdBy=userId and ex.Submitted=1 and YEARWEEK(ex.createdDate)=YEARWEEK(date1);
SELECT msd.userEmail,ts.id,ts.Status,msd.firstName,ex.Submitted,ex.expenseclaimId,ex.ClaimedStatus,ex.fromdate,ex.toDate,ex.totalExpense FROM t_userdetails as msd inner join t_tex_expenseclaime as ex on ex.createdBy=msd.id inner join t_tex_transcation as ts on ts.headerId=ex.expenseclaimId where ex.createdBy=userId and ex.Submitted=1 and totalExpense>=@b and  ClaimedStatus>=0 and ts.approvelId=mgId  and YEARWEEK(ex.createdDate)=YEARWEEK(date1);

end if;
/*SELECT id,description1 FROM bugmanagement2.t_mastersdescription where code=6;*/
#SELECT totalExpense as sum from t_tex_expenseclaime where createdBy=userId;
/*SELECT id,firstName,lastName FROM bugmanagement2.t_user where managerId=userId ;*/

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Ex_getExpenseTypeweekBy` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `Ex_getExpenseTypeweekBy`(userId int,expDate varchar(50))
BEGIN

#SELECT id,description FROM  bugmanagement2.t_ex_masterDescription where code=3 and isActive=1;
SELECT msd.description,sub.expId,sub.id,sub.expenseType,sub.anyFile,ex.ClaimedStatus,ex.Submitted,ex.expenseclaimId,sub.fromdate,sub.toDate,sub.totalExpense FROM t_tex_expensesubtable as sub inner join t_tex_masterdescription as msd on sub.expenseType=msd.id  inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId where ex.createdBy=userId and YEARWEEK(ex.createdDate)=YEARWEEK(expDate);
#SELECT id,description1 FROM bugmanagement2.t_mastersdescription where code=6;
SELECT totalExpense as sum from t_tex_expenseclaime where createdBy=userId;
/*if userId!=115
then
SELECT id,firstName,lastName FROM bugmanagement2.t_user where managerId=userId ;
end if;
if userId=115
then
SELECT id,firstName,lastName FROM bugmanagement2.t_user;
end if;*/

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Ex_newgetExpenseType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `Ex_newgetExpenseType`(userId int)
BEGIN
set @a=(SELECT roleID FROM t_userdetails where id=userId);
SELECT * FROM  t_tex_masterdescription where code=1 and isActive=1;
SELECT w.WBSName as tripAssignment,msd.description,sub.expId,sub.id,sub.expenseType,sub.anyFile,ex.ClaimedStatus,ex.Submitted,ex.expenseclaimId,sub.fromdate,sub.toDate,sub.totalExpense FROM t_tex_expensesubtable as sub inner join t_tex_masterdescription as msd on sub.expenseType=msd.id  inner join t_tex_expenseClaime as ex on ex.expenseclaimId=sub.expenseclaimId inner join t_wbs as w on w.WBSId=sub.tripAssignment where ex.createdBy=userId and ex.Submitted=0 and YEARWEEK(ex.createdDate)=YEARWEEK(NOW());

#SELECT msd.description,sub.id,sub.expId,sub.expenseType,sub.anyFile,ex.ClaimedStatus,ex.Submitted,ex.expenseclaimId,sub.fromdate,sub.toDate,sub.totalExpense FROM t_ex_ExpenseSubTable as sub inner join t_ex_masterDescription as msd on sub.expenseType=msd.id  inner join t_e_expenseClaime as ex on ex.expenseclaimId=sub.expenseclaimId where ex.createdBy=userId and ex.Submitted=0 ;
SELECT id,description1 FROM t_mastersdescription where code=6;
#SELECT sum(totalExpense)as sum from t_ex_ExpenseSubTable where createdBy=userId and Submitted=0;
SELECT totalExpense as sum from t_tex_expenseclaime where createdBy=userId and Submitted=0;
#SELECT id,firstName,lastName FROM t_userdetails where managerId=userId ;
if @a=1
then
SELECT id,firstName,lastName FROM t_userdetails;
end if;
if @a=5
then
SELECT id,firstName,lastName FROM t_userdetails;
end if;
if @a=4
then
SELECT * FROM t_userdetails where managerId = 168 union 
SELECT * FROM t_userdetails where managerId in (SELECT id FROM t_userdetails where managerId = userId)
union
SELECT * FROM t_userdetails where managerId in(SELECT id FROM t_userdetails where managerId in (SELECT id FROM t_userdetails where managerId =userId))
union
SELECT * FROM t_userdetails where managerId in  (Select id FROM t_userdetails where managerId in(SELECT id FROM t_userdetails where managerId in (SELECT id FROM t_userdetails where managerId =userId)));
end if;
if @a=2 or @a=3
then
SELECT id,firstName,lastName FROM t_userdetails where managerId=userId ;
end if;
#SELECT WBSId, WBSName FROM t_wbs as w inner join t_userdetails as u on w.WBSOwner=u.firstname where u.id=userId;
SELECT w.WBSId,w.WBSName FROM portal.t_projectdetails as pro
 inner join t_projectresourcemapping as map on pro.id=map.ProjectId 
inner join t_wbs w on pro.id=w.projectId where map.userId=userId;
SELECT * FROM t_tex_masterdescription where code=2;
SELECT * FROM t_tex_masterdescription where code=3;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `Ex_showExpenseDescription` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `Ex_showExpenseDescription`(claimId int)
BEGIN
#SELECT msd.description,sub.expId,sub.id,sub.expenseType,sub.anyFile,ex.ClaimedStatus,ex.Submitted,ex.expenseclaimId,sub.fromdate,sub.toDate,sub.totalExpense FROM t_tex_expensesubtable as sub inner join t_tex_masterdescription as msd on sub.expenseType=msd.id  inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId where ex.expenseclaimId=claimId;
SELECT msd.description,sub.expId,sub.id,w.WBSName,sub.expenseType,sub.anyFile,ex.ClaimedStatus,ex.Submitted,ex.expenseclaimId,sub.fromdate,sub.toDate,sub.totalExpense FROM t_tex_expensesubtable as sub inner join t_tex_masterdescription as msd on sub.expenseType=msd.id  inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId inner join t_wbs as w on w.WBSId=sub.tripAssignment where ex.expenseclaimId=claimId;

SELECT sum(totalExpense)as sum from t_tex_expenseclaime where createdBy=113;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_split` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `sp_split`(IN toSplit text, IN target char(255),in tableName varchar(255) )
BEGIN
	
	SET @tableName = tableName;
	SET @fieldName = 'variable';
 
	
	SET @sql := CONCAT('DROP TABLE IF EXISTS ', @tableName);
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
 
	
	SET @sql := CONCAT('CREATE TEMPORARY TABLE ', @tableName, '(Id int auto_increment,', @fieldName, ' VARCHAR(1000),primary key(Id))');
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
 
	
	SET @vars := toSplit;
	SET @vars := CONCAT("('", REPLACE(@vars, ",", "'),('"), "')");
 
	
	SET @sql := CONCAT('INSERT INTO ', @tableName,'(',@fieldName,') VALUES ', @vars);
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
 
	
	IF target IS not NULL THEN
		#SET @sql := CONCAT('SELECT Id, TRIM(`', @fieldName, '`) AS `', @fieldName, '` FROM ', @tableName);
	#ELSE
		SET @sql := CONCAT('INSERT INTO ', target, ' SELECT TRIM(`', @fieldName, '`) FROM ', @tableName);
	END IF;
 
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
		
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_addEditClient` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_addEditClient`(
ide int(11),
flag int(11),
clcode varchar(200),
clname varchar(200),
clabbname varchar(200),
category varchar(50),
claccountl varchar(200),
location int,
address varchar(200),
clcontactper varchar(200),
clcontactperemail varchar(200),
clconphone varchar(200),
isActive int(11),
createdby int(11),
modefyby int(11),
retid int(11)
)
BEGIN
select * from t_location;
select * from t_userdetails where roleId=4;
if flag=0
then
INSERT INTO t_clients
(`clientCode`,
`clientName`,
`clientAbbName`,
`category`,
`address`,
`location`,
`clientContactPerson`,
`clientContactPersonEmail`,
`clientContactPhone`,
`isActive`,
`createdDate`,
`createdBy`,
`retailerId`,
`lastModifiedDate`,
`lastModifiedBy`,
`clientAccountLead`)
VALUES
(
clcode,
clname,
clabbname,
category,
address,
location,
clcontactper,
clcontactperemail,
clconphone,
isActive,
now(),
createdby,
retid,
now(),
modefyby,
claccountl);
else
UPDATE t_clients
SET
clientName = clname,
clientAbbName =clabbname,
category = category,
clientAccountLead = claccountl,
location =location,
address = address,
clientContactPerson =clcontactper,
clientContactPersonEmail = clcontactperemail,
clientContactPhone = clconphone,
lastModifiedDate =now(),
lastModifiedBy = modefyby
WHERE id = ide;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_addEditPro` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_addEditPro`(pid1 int(11),pname varchar(300),
pcode varchar(100),ptype varchar(100),
pclient varchar(200),
ptech varchar(100),
pdescription varchar(500),
psdate varchar(200),
pedate varchar(200),
asdate varchar(200),
aedate varchar(200),pstatus int,
pcom varchar(100),ploc int,
chead varchar(100),
ahead varchar(100),manager1 varchar(100),
tlead varchar(100),
complete int,isBill int,tax varchar(100),poNum int
,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN

/*
Select 
    u.`id`,
    u.`projectTitle`,
    u.`pcode`,
    u.`ptype`,
   u.`description`,
    u.`plannedStartDate`
, u.`plannedEndDate`
   , u.`actualStartDate`,
    u.`actualEndDate`,
    u.`pstatus`,
    u.`pcomplexity`,
    u.`plocation`,
    u.`commercialHead`,
    u.`accountHead`,
    u.`manager`,
    u.`teamLead`
from
    t_projectdetails u
        inner join
    t_retailer l ON u.retailerId = l.id
        
where
    
     u.pstatus=1;
*/

if pid1=0 then

call `usp_split_nr` (pclient,',','temp');
call `usp_split_nr` (ptech,',','temp1');


INSERT INTO t_projectdetails
VALUES
(0,inRetailerId,pname,pcode,ptype,
pdescription,psdate,pedate,asdate,
aedate,pstatus,pcom,ploc,chead,ahead,
manager1,tlead,pstatus,complete,isBill,tax,poNum);

set @lid=LAST_INSERT_ID();

insert into t_projectclientmapping (pid,cname) select @lid,variable from temp;
insert into t_projecttechnologymapping (pid,tid) select @lid,variable from temp1;
drop table temp;
drop table temp1;
select @lid as lid;

else
update t_projectdetails
set
projectTitle=pname,
pcode=pcode,
ptype=ptype,
description=pdescription,
plannedStartDate=psdate,
plannedEndDate=pedate,
actualStartDate=asdate,
actualEndDate=aedate,
pstatus=pstatus,
pcomplexity=pcom,
plocation=ploc,
commercialHead=chead,
accountHead=ahead,
manager=manager1,
teamLead=tlead,
completed=complete,
isBillable=isBill,
taxCode=tax,
poNumber=poNum

where id=pid1;

delete from t_projectclientmapping where pid=pid1;
delete from t_projecttechnologymapping where pid=pid1;

call `usp_split_nr` (pclient,',','temp');
call `usp_split_nr` (ptech,',','temp1');

insert into t_projectclientmapping (pid,cname) select pid1,variable from temp;
insert into t_projecttechnologymapping (pid,tid) select pid1,variable from temp1;
drop table temp;
drop table temp1;

select pid1 as lid;

end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_addEditProject` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_addEditProject`(pid int,flag int,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
if flag=1 then
 select a.id,a.projectTitle,a.pcode,a.ptype,a.description,a.PlannedStartDate,
a.PlannedEndDate,a.ActualStartDate,a.ActualEndDate,a.pstatus,a.pcomplexity,a.plocation,
a.commercialHead,
a.accountHead,a.manager,a.teamLead,
a.completed,a.isBillable,a.taxCode,a.poNumber,
b.cname,loc.id as locid,loc.location,cl.clientName,tech.description1,tec.technologyId,
concat(us.firstName," ",us.lastName) as name,res.userId
from
    t_projectdetails a

left outer join t_projecttechnologymapping as tec on a.id=tec.projectId
left outer  join t_mastersdescription as tech on tec.technologyId=tech.id
left outer  join t_location as loc on a.plocation=loc.id
left outer  join t_projectclientmapping as b on a.id=b.pid
left outer  join t_clients as cl on b.cname=cl.id
left outer  join t_projectresourcemapping as res on a.id=res.projectId
left outer  join t_userdetails as us on res.userId=us.id

 where a.id=pid and tech.code=4;


select *from t_location;

select id,description1 from t_mastersdescription where code=4;

select id,clientName from t_clients where retailerId=inRetailerId;

select id,concat(firstName," ",lastName) as name 
from t_userdetails where roleId=1 or roleId=4;

select id,concat(firstName," ",lastName) as name
 from t_userdetails where retailerId=inRetailerId;

select flag;

select *from t_projectdetails;

elseif flag=0 then
select *from t_projectdetails;

select *from t_location;

select id,description1 from t_mastersdescription where code=4;

select  id,clientName from t_clients where retailerId=inRetailerId;

select id,concat(firstName," ",lastName) as name 
from t_userdetails where roleId=1 or roleId=4;

select id,concat(firstName," ",lastName) as name from t_userdetails where retailerId=inRetailerId;

select flag;

select * from t_projectdetails;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_addEditProWithFlag` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_addEditProWithFlag`(pid1 int(11),
pname varchar(300),
pcode1 varchar(100),ptype1 varchar(100),
pclient varchar(200),
ptech varchar(100),pres varchar(100),
pdescription varchar(500),
psdate1 varchar(200),
pedate1 varchar(200),
asdate1 varchar(200),
aedate1 varchar(200),pstatus11 int,
pcom varchar(100),ploc varchar(20),
chead varchar(100),
ahead varchar(100),manager1 varchar(100),
complete varchar(100),isBill int,tax varchar(100),poNum varchar(100),tabFlag int
,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN

if pid1=0 then

call `usp_split_nr` (pclient,',','temp');
call `usp_split_nr` (ptech,',','temp1');
call `usp_split_nr` (pres,',','temp2');

if tabFlag=1 then
INSERT INTO t_projectdetails
(`retailerId`,`projectTitle`,`pcode`,`description`,`pcomplexity`,`plocation`,`isActive`)
VALUES
(inRetailerId,pname,pcode1,
pdescription,pcom,case when ploc='' then 0 else ploc end,pstatus11);

set @lid=LAST_INSERT_ID();

insert into t_projectclientmapping (`pid`,`cname`) select @lid,variable from temp;
insert into t_projecttechnologymapping (`projectId`,`technologyId`) select @lid,variable from temp1;

insert into t_projectresourcemapping (`projectId`,`userId`) select @lid,variable from temp2;


drop table temp;
drop table temp1;
drop table temp2;
select @lid as lid;

select *from t_projectdetails where id=@lid;

else
select 3;

UPDATE `portal`.`t_projectdetails`
SET
`plannedStartDate` = psdate1,
`plannedEndDate` = pedate1,`actualStartDate` = asdate1,
`actualEndDate` =aedate1 ,`completed` =complete 
WHERE `id` =pid1 ;


delete from t_projectclientmapping where pid=pid1;
delete from t_projecttechnologymapping where projectId=pid1;
delete from t_projectresourcemapping where projectId=pid1;

call `usp_split_nr` (pclient,',','temp');
call `usp_split_nr` (ptech,',','temp1');
call `usp_split_nr` (pres,',','temp2');

insert into t_projectclientmapping (`pid`,`cname`) select pid1,variable from temp;
insert into t_projecttechnologymapping (`projectId`,`technologyId`) select pid1,variable from temp1;

insert into t_projectresourcemapping (`projectId`,`userId`) select pid1,variable from temp2;


drop table temp;
drop table temp1;
drop table temp2;



select pid1 as lid;

select *from t_projectdetails where id=@lid;
end if;


else
update t_projectdetails
set
projectTitle=pname,
pcode=pcode1,
ptype=ptype1,
description=pdescription,
plannedStartDate=psdate1,
plannedEndDate=pedate1,
actualStartDate=asdate1,
actualEndDate=aedate1,
pstatus=pstatus11,
isActive=pstatus11,
pcomplexity=pcom,
plocation=case when ploc='' then 0 else ploc end,
commercialHead=chead,
accountHead=ahead,
manager=manager1,
completed=complete,
isBillable=isBill,
taxCode=tax,
poNumber=poNum

where id=pid1;

delete from t_projectclientmapping where pid=pid1;
delete from t_projecttechnologymapping where projectId=pid1;
delete from t_projectresourcemapping where projectId=pid1;

call `usp_split_nr` (pclient,',','temp');
call `usp_split_nr` (ptech,',','temp1');
call `usp_split_nr` (pres,',','temp2');


insert into t_projectclientmapping (`pid`,`cname`) select pid1,variable from temp;
insert into t_projecttechnologymapping (`projectId`,`technologyId`) select pid1,variable from temp1;
insert into t_projectresourcemapping (`projectId`,`userId`) select pid1,variable from temp2;

drop table temp;
drop table temp1;
drop table temp2;

select pid1 as lid;

end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_addEditWbs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_addEditWbs`(id int,flag int,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN

if flag=1 then

select * from t_wbs as t
 inner join t_projectdetails as p on t.projectId=p.id
inner join t_location as loc on t.WBSLocation=loc.id
where t.WBSId=id and t.retailerId=inRetailerId;

select *from t_location ;

select u.id,concat(u.firstName," ",u.lastName) as name
 from t_userdetails u where u.retailerId=inRetailerId;


else 
select *from t_projectdetails where retailerId=inRetailerId;

select *from t_location;

select u.id,concat(u.firstName," ",u.lastName) as name
 from t_userdetails u where u.retailerId=inRetailerId;



end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_addEditWbsDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_addEditWbsDetails`(flag int(11),wbsid1 int(11),
wname varchar(45),wcode varchar(45),
pname int(11),wowner varchar(45),psdate varchar(45),pedate varchar(45),asdate varchar(45),aedate varchar(45),
wstatus int,weffort varchar(45),wlocation int,
in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN


if flag=0 then
select flag;

INSERT INTO `portal`.`t_wbs`
(`WBSId`,
`WBSName`,
`WBSCode`,
`projectId`,
`WBSOwner`,
`wplannedStartDate`,
`wplannedEndDate`,
`wactualStartDate`,
`wactualEndDate`,
`estimateEffort`,
`WBSStatus`,
`WBSLocation`,
`retailerId`)

 VALUES
(0,wname,wcode,pname,wowner,psdate,pedate,asdate,aedate,
weffort,wstatus,wlocation,inRetailerId);

else
select flag;

UPDATE `t_wbs`
SET
`WBSName` = wname,
`WBSCode` =wcode ,

`WBSOwner` =wowner ,
`wplannedStartDate`=psdate,
`wplannedEndDate`=pedate,
`wactualStartDate` = asdate,
`wactualEndDate` = aedate,
`estimateEffort` = weffort,
`WBSStatus` = wstatus,
`WBSLocation` =wlocation 
WHERE `WBSId` = wbsid1;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_AssignmentData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_AssignmentData`(in inStatus int,retailer int)
BEGIN
Select projectTitle,WBSName,WBSCode,AssignmentDate,AssignmentEndDate,AsIdt1,assgisActive,
fn
from  

(Select projectTitle,WBSName,WBSCode,AssignmentDate,AssignmentEndDate,assg.id as AsIdt1,assg.isActive as assgisActive,assg.retailerId as retail from t_assignment as assg inner join t_projectDetails as p on assg.projectId=p.id 
inner join t_wbs as wbs on assg.WBSID=wbs.WBSId)
as table1 
inner join 


(SELECT AsId ,GROUP_CONCAT(firstName) as fn 
FROM (SELECT assg.id as AsId,firstName FROM t_userdetails as u
inner join t_mapUserAssig as map on u.id=map.userId 
inner join t_assignment as assg on assg.id=map.assId) as temp 
GROUP BY AsId) as table2

on table1.AsIdt1=table2.AsId where assgisActive=inStatus and table1.retail=retailer;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_addFurniture` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_addFurniture`(ACID varchar(45),
purchaseOrder varchar(45),quantity int(11),
deliveryDate date,vendor varchar(45),
invoiceNo varchar(20),invoiceDate date,
invoiceAmt varchar(45),typel varchar(45),
uprice int(11),
color varchar(20),
brand varchar(50),
isActive tinyint(1),inatid varchar(50))
BEGIN
Select id from t_ast_assettype where type= trim(inatid) into @asttype;
INSERT INTO `t_ast_header`
( `ACID`,`purchaseOrder`,`quantity`,`deliveryDate`,
`vendor`,`invoiceNo`,`invoiceDate`,`invoiceAmt`,
`name`,`uprice`,
`color`,`brand`,
`isActive`,`atid`)
VALUES
(
ACID,purchaseOrder,quantity,
DATE_FORMAT(deliveryDate,'%Y-%m-%d %h:%i:%s'),vendor,
invoiceNo,
DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s'),invoiceAmt,
typel,uprice,color,
brand,
isActive, @asttype);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_addHardware` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_addHardware`(incid varchar(45)
,purchaseOrder varchar(45),quantity int(11), deliveryDate datetime, 
vendor varchar(45), invoiceAmt int(11),invoiceDate datetime, invoiceNo 
 varchar(20), line varchar(100), comp varchar(100), comps varchar(100),
 flag tinyint(1))
BEGIN
INSERT INTO `t_ast_header`
(`atid`,
`ACID`,
`purchaseOrder`,
`quantity`,
`deliveryDate`,
`vendor`,`invoiceAmt`,
`invoiceDate`,`invoiceNo`)
VALUES
('1',
incid,
purchaseOrder,
quantity,
deliveryDate,vendor,
invoiceAmt,invoiceDate,
invoiceNo);
select IFNULL((select substring_index((select max(l.tagNo) from t_ast_line l
where l.acid=incid),'/',-1)),0) into @stag;
Select last_insert_id(max(id)) from t_ast_header into @headerid;
SELECT group_Concat(w.colName) FROM t_ast_attname w 
where w.flag='0' and w.ACID=1 into @tempvar;
call usp_split_nr(line,';','lineData');
select group_Concat(concat(incid,',',(select concat('"',a.componentName,'/',
@stag+t.id,'"') from t_ast_assetcomponent a where a.id=incid),',',@headerid,',',
t.variable) separator '),(') from 
lineData t into @var2;
set @var1=concat("insert into `t_ast_line`(acid,tagNo,hId,serialNo,",
@tempvar,",brand,warranty) values (",@var2,");"); 
 select @var1;
 PREPARE stmt FROM @var1;
 EXECUTE stmt;
 DEALLOCATE PREPARE stmt;
Select last_insert_id(max(id)) from t_ast_line into @lineid;
call usp_split_nr(comps,',','tab');
select * from tab;
select comp;
if comp='' then set @y='1';
else set @c=comp;
end if;
select @c;
select @y;
call usp_split_nr(@c,':','compData');
select * from compData;
set @i=0;
while @i<(select ifnull((select count(1) from compData),0)) do
set@i=@i+1;
select variable from compdata where id=@i into @qa;
call usp_split_nr(@qa,';','qatab');
set @j=0; 
while @j<(select ifnull((select count(1) from qatab),0)) do
set @j=@j+1;
Set @temval= (select IFNULL((select substring_index((select max(e.tagNo) from 
t_ast_maptocomponents e where e.attId=(select r.variable from tab r where r.id=@j
)),'/',-1)),0));
UPDATE qatab q inner join tab r on q.id=r.id inner join  
t_ast_attributes u ON u.id=r.variable set q.variable= (Select concat
(u.attribute,'/',@temval+1,',',q.variable)) where r.id=@j; 
#set @temptag= (select concat(@temptag,',',(Select concat
#(u.attribute,'/',@temval+1) from t_ast_attributes u 
#where u.id=(select r.variable from tab r where r.id=@j)))); 
end while;
Select group_concat(concat(now(),',',now(),',',@lineid,',',a.variable,','
,b.variable) separator '),(') from tab a inner join qatab b  
on a.id=b.id into @var4;
set @var5=concat("insert into t_ast_maptocomponents(`createdDate`,
`modifiedDate`,`lineId`,'attId`,`tagNo`,`serialNo`,`brand`,`warranty`,`size`) 
values(",@var4,");");
select @var5;
 PREPARE stmt FROM @var5;
 EXECUTE stmt;
 DEALLOCATE PREPARE stmt;
end while;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_addSoftware` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_addSoftware`(ACID varchar(45),
#softType varchar(45),
vendor varchar(45),
invoiceDate datetime,
typel varchar(45),
description varchar(100),licenceRqd varchar(4),
licenceKey varchar(100),
users int(11),licenceExpDate datetime, licencePurchaseDate datetime,
isActive tinyint(1), inatid varchar(50))
BEGIN
if `licenceRqd` ='on' then
Select id from t_ast_assettype where type= trim(inatid) into @asttype;
INSERT INTO `t_ast_header`
(
`ACID`,`softType`, 
`vendor`,`invoiceDate`,
`name`,`description`,
`licenceRqd`,`licenceKey`,
`users`,`licenceExpDate`,
`licencePurchaseDate`,`isActive`,`atid`)
VALUES
(
ACID,
ACID,
vendor,
DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s'),
typel,
description,licenceRqd,
licenceKey,users,
DATE_FORMAT(licenceExpDate,'%Y-%m-%d %h:%i:%s'),
DATE_FORMAT(licencePurchaseDate,'%Y-%m-%d %h:%i:%s'),
isActive,@asttype);
set @i=1;
while @i<=users do
insert into t_ast_line(`ACID`,`licenceRqd`,`licenceKey`,`hId`)values(ACID,licenceRqd,licenceKey,
(Select last_insert_id(max(id)) from t_ast_header));
set @i=@i+1;
end while;
end if;
if `licenceRqd` ='off' then
Select id from t_ast_assettype where type= trim(inatid) into @asttype;
INSERT INTO `t_ast_header`
(
`ACID`,
`softType`, 
`vendor`,
`invoiceDate`,
`name`,`description`,`licenceRqd`,`isActive`,`atid`)
VALUES
(
ACID,
#softType,
ACID,
vendor,
DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s'),
typel,
description,licenceRqd,
isActive,@asttype);
insert into t_ast_line(`ACID`,`licenceRqd`,`licenceKey`,`hId`)values(ACID,licenceRqd,null,
(Select last_insert_id(max(id)) from t_ast_header));
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_addstationary` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_addstationary`(ACID varchar(45),
purchaseOrder varchar(45),
quantity int(11),
deliveryDate datetime,
vendor varchar(45),
invoiceAmt varchar(45),
invoiceDate datetime,
invoiceNo varchar(20),
typel varchar(45),
isActive tinyint(1), inatid varchar(50)
)
BEGIN

Select id from t_ast_assettype where type= trim(inatid) into @asttype;
INSERT INTO `t_ast_header`
(
`ACID`,
`purchaseOrder`, 
`quantity`,	
`deliveryDate`,
`vendor`,
`invoiceAmt`,
`invoiceDate`,
`invoiceNo`,`name`,`isActive`,`atid`)
VALUES
(
ACID,
purchaseOrder,
quantity,
DATE_FORMAT(deliveryDate,'%Y-%m-%d %h:%i:%s'),
vendor,
invoiceAmt,
DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s'),
invoiceNo,typel,
isActive, @asttype);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_assetAssignment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_assetAssignment`(
in assignflag varchar(45),in userId int(11),in tid varchar(45)
,in lineId varchar(45),in compId varchar(45),
in adate varchar(100))
BEGIN

call usp_split_nr(lineId,',','t2');
select * from t2;
call usp_split_nr(compId,',','t3');
select * from t3;
call usp_split_nr(adate,',','t4');
select * from t4;
call usp_split_nr(assignflag,',','t6');
select * from t6;
insert into t_ast_transaction (uid,lid,cid,assignDate,atid) 
select userId,t2.variable,t3.variable,t4.variable,tid 
from t2 inner join t3 on t3.id=t2.id
inner join t4 on t4.id=t3.id
inner join t6 on t6.id=t4.id
on duplicate key update assign=if(t6.variable=0,0,1); 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_assignSoftware` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_assignSoftware`(in assignId int)
BEGIN
select lineIdSw, acidSw from t_ast_softwareassignment where lineIdHw=lineId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_dataForHardware` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_dataForHardware`(in lag int,in cid int)
BEGIN
if lag='0' then
Select id,componentName from t_assetComponent where ATID=1;
select a.AID,b.attribute,a.attNo from t_attName a inner join t_attributes b on a.AID=b.id
where a.ACID=1 and a.flag='0';
select a.AID,b.attribute,a.attNo from t_attName a inner join t_attributes b on a.AID=b.id
where a.ACID=1 and a.flag='1';
end if;
if lag='1' then
select a.AID,b.attribute,a.attNo from t_attName a inner join t_attributes b on a.AID=b.id
where a.ACID=cid and a.flag='0';
select a.AID,b.attribute,a.attNo from t_attName a inner join t_attributes b on a.AID=b.id
where a.ACID=cid and a.flag='1';
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getAcc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getAcc`(in tid int(11))
BEGIN
select * from t_ast_assetcomponent where ATID=tid;
select * from t_ast_attributes;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getAssignedAsset` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getAssignedAsset`(in userid int(11),in tid int(11))
BEGIN
if tid=1 then
select t.lid,DATE_FORMAT(t.assignDate,'%Y-%m-%d') as assignDate,l.tagNo,c.componentName from t_ast_transaction t
inner join t_ast_line l on l.id=t.lid
inner join t_ast_assetcomponent c on c.id=l.acid
where t.uid=userid and t.cid=0 and t.assign=1; 
select t.lid,t.cid,DATE_FORMAT(t.assignDate,'%Y-%m-%d') as assignDate,l.tagNo,c.attribute from t_ast_transaction t
inner join t_ast_maptocomponents l on l.id=t.cid
inner join t_ast_attributes
 c on c.id=l.attId
where t.uid=userid and t.assign=1;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getAssignFlag` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getAssignFlag`(in id int(11))
BEGIN
select ifnull((select assign from t_ast_transaction where uid=id),'0') as asflag,
ifnull((select ATID from t_ast_transaction where uid=id),'0') as tid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getAttr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getAttr`(cid int(11))
BEGIN
select a.AID,b.attribute,a.attNo from t_ast_attName a inner join 
t_ast_attributes b on a.AID=b.id where a.ACID=cid and a.flag=0;
select a.AID,b.attribute,a.attNo from t_ast_attName a inner join 
t_ast_attributes b on a.AID=b.id where a.ACID=cid and a.flag=1;
Select concat (Aid,':',valu) from (
Select Aid,group_concat(valu) as valu from t_ast_attvalues where AID in (
Select Aid from t_ast_attname where ACID=cid
) group by Aid) as a;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getComponentType` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getComponentType`(in tid int(11))
BEGIN
if tid=0 then
select id ,componentName from t_ast_assetcomponent where ATID=1;
select id ,componentName from t_ast_assetcomponent where ATID=2;
else
select id,componentName from t_ast_assetcomponent where ATID=tid;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getEditHardware` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getEditHardware`(inId int)
BEGIN
SELECT h.id,
    c.componentName,
    `purchaseOrder`,
    `quantity`,
   # `t_header`.`deliveryDate`,
   DATE_FORMAT(deliveryDate,'%Y-%m-%d %h:%i:%s') deliveryDate,
    `vendor`,
    `invoiceAmt`,
    #`t_header`.`invoiceDate`,
     DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s') invoiceDate,
    `invoiceNo`
    FROM t_ast_header h inner join t_ast_assetcomponent c on c.id=h.acid
    where h.id=inId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getEditStationary` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getEditStationary`(inId int)
BEGIN
SELECT `id`,
    `ACID`,
    `purchaseOrder`,
    `quantity`,
   # `t_header`.`deliveryDate`,
   DATE_FORMAT(deliveryDate,'%Y-%m-%d %h:%i:%s') deliveryDate,
    `vendor`,
    `createdDate`,
    `modifiedDate`,
    `createdBy`,
    `modifiedBy`,
    `invoiceAmt`,
    #`t_header`.`invoiceDate`,
     DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s') invoiceDate,
    `invoiceNo`,
    `name`,
    `uprice`,
    `color`,
    `brand`,
	`atr4`,
	`atr5`,
    `atr6`,
    `atr7`,
    `atr8`,
    `atr9`,
    `atr10`,
    `atr11`,
    `atr12`,
    `licenceKey`,
    `users`,
    DATE_FORMAT(licenceExpDate,'%Y-%m-%d %h:%i:%s') licenceExpDate,
    DATE_FORMAT(licencePurchaseDate,'%Y-%m-%d %h:%i:%s') licencePurchaseDate,
    `softType`,
    `description`,`licenceRqd`    
FROM `t_ast_header` where id=inId;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getMap` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getMap`(cid int)
BEGIN

select acid, attNo,AID,case when flag=0 then 0 else 1 end as flag from t_ast_attname where ACID=cid;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getTransactionDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getTransactionDetails`(in userId int(11),
in flag int(11))
BEGIN
select * from t_ast_transaction where uid=userId and ATID=flag;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getTypeAndSubtype` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getTypeAndSubtype`()
BEGIN
select * from t_ast_assettype;
select * from t_ast_assetcomponent where ATID=1;
select * from t_ast_attributes where id!=0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getUnassigned` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getUnassigned`(in tid int(11),in incid int(11))
BEGIN
select id,tagNo from t_ast_line where id not in(select LID from 
t_ast_transaction where atid=tid and assign=1 and CID=0 ) and acid=incid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getUnassignedAcc` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getUnassignedAcc`(in compId int(11))
BEGIN
select tagNo,id,lineId from t_ast_maptocomponents where attId=compId and id 
not in(select cid from t_ast_transaction where assign=1); 
 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_getValuesOfAttribbutes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_getValuesOfAttribbutes`(in cid int)
BEGIN
Select concat (Aid,':',valu) from (
Select Aid,group_concat(valu) as valu from t_ast_attvalues where AID in (
Select Aid from t_ast_attname where ACID=cid
) group by Aid) as a;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_mapAtt` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_mapAtt`(ACID int,
pri varchar(45),sec varchar(45),priAtt varchar(45),secAtt varchar(45))
BEGIN
if pri!='' then
call usp_split_nr(pri,',','primary7');
call usp_split_nr(priAtt,',','priAttribute');
select count(1) from t_ast_attname q where
 q.ACID=ACID and q.flag='0' and q.attNo in (select variable from
 priAttribute) into @ifExist;
 if @ifExist>0 then
update t_ast_attname x inner join priAttribute y on y.variable=x.attNo 
inner join primary7 z on y.id=z.id set x.AID=z.variable
 where x.ACID=ACID 
 and x.flag='0';
 end if;
 if @ifExist=0 then
insert into t_ast_attname(attNo,ACID,AID,flag,colName) select p.variable,ACID,
 a.variable,0,(select concat('a',p.variable)) from primary7 a inner join priAttribute
 p on a.id=p.id;
end if;
end if;
if sec!='' then
call usp_split_nr(sec,',','secondary');
call usp_split_nr(secAtt,',','secAttribute');
select count(1) from t_ast_attname q where
 q.ACID=ACID and q.flag='1' and q.attNo in (select variable from
 secAttribute) into @ifExists;
 if @ifExists>0 then
update t_ast_attname x inner join secAttribute y on y.variable=x.attNo 
inner join secondary z on y.id=z.id set x.AID=z.variable
 where x.ACID=ACID 
 and x.flag='1';
 end if;
 if @ifExists=0 then
 insert into t_ast_attname(attNo,ACID,AID,flag,colName) select r.variable,ACID,
 s.variable,1,(select concat('a',r.variable))from secondary s inner join secAttribute r on s.id=r.id;
 end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_updateHardware` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_updateHardware`(
ACID varchar(45),purchaseOrder  varchar(45), 
    quantity int(11),deliveryDate datetime,
    vendor varchar(45),invoiceAmt varchar(45),
    invoiceDate datetime ,invoiceNo varchar(20),
    name varchar(45),in inId int)
BEGIN
UPDATE `t_ast_header`
SET
`ACID` =ACID,
`purchaseOrder` = purchaseOrder,
`quantity` = quantity,
`deliveryDate` = DATE_FORMAT(deliveryDate,'%Y-%m-%d %h:%i:%s'),
`vendor` = vendor,
`invoiceAmt` = invoiceAmt,
`invoiceDate` = DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s'),
`invoiceNo` = invoiceNo,
`name` = name
WHERE `id` = inId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_updateStationary` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_updateStationary`(
ACID varchar(45),purchaseOrder  varchar(45), 
    quantity int(11),deliveryDate datetime,
    vendor varchar(45),invoiceAmt varchar(45),
    invoiceDate datetime ,
    invoiceNo varchar(20),name varchar(45),
    uprice int(11),color varchar(20),
    brand varchar(50), licenceKey varchar(100),
    users varchar(20),
    licenceExpDate datetime,
    licencePurchaseDate datetime,softType varchar(100),
    description varchar(100),
    licenceRqd varchar(4),
    temp tinyint(1),in inId int)
BEGIN
if temp = 2 then
select 2;
UPDATE `t_ast_header`
SET
`ACID` =ACID,
`purchaseOrder` = purchaseOrder,
`quantity` = quantity,
`deliveryDate` = DATE_FORMAT(deliveryDate,'%Y-%m-%d %h:%i:%s'),
`vendor` = vendor,
`invoiceAmt` = invoiceAmt,
`invoiceDate` = DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s'),
`invoiceNo` = invoiceNo,
`name` = name
WHERE `id` = inId;
end if;
if temp=1 then
select 1;
UPDATE `t_ast_header`
SET
`ACID` =ACID,
`purchaseOrder` = purchaseOrder,
`quantity` = quantity,
`deliveryDate` = DATE_FORMAT(deliveryDate,'%Y-%m-%d %h:%i:%s'),
`vendor` = vendor,
`invoiceAmt` = invoiceAmt,
`invoiceDate` = DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s'),
`invoiceNo` = invoiceNo,
`name` = name,
`uprice`= uprice,
`color`= color,
`brand`= brand
WHERE `id` = inId;
end if;
if temp=3 then
UPDATE `t_ast_header`
SET
`isActive` = 0
WHERE `id` = inId;
end if;
if temp=4 then
UPDATE `t_ast_header`
SET
`ACID` =ACID,
`softType`=softType,
`vendor` = vendor,
   #DATE_FORMAT(invoiceDate,'%Y-%m-%d') ,
`invoiceDate` = DATE_FORMAT(invoiceDate,'%Y-%m-%d %h:%i:%s') ,
`name` = name,
`licenceRqd`=licenceRqd,
`description`=description,
`licenceKey`=licenceKey,
`users`=users,
`licencePurchaseDate`=DATE_FORMAT(licencePurchaseDate,'%Y-%m-%d %h:%i:%s'),
`licenceExpDate`=DATE_FORMAT(licenceExpDate,'%Y-%m-%d %h:%i:%s')
WHERE `id` = inId;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_viewHardware` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_viewHardware`()
BEGIN
SELECT h.id,
    c.componentName,
    `purchaseOrder`,
    `quantity`,
    DATE_FORMAT(`deliveryDate`,'%Y-%m-%d') deliveryDate,
    `vendor`,
    `invoiceAmt`,
     DATE_FORMAT(`invoiceDate`,'%Y-%m-%d') invoiceDate,
     `invoiceNo`,
    `name`     
FROM t_ast_header h inner join t_ast_assetcomponent c on c.id=h.acid
 where h.atid=1 and h.isActive=1;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ast_viewStationary` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ast_viewStationary`(temp tinyint(1))
BEGIN
#select * from EAM.t_header where uprice is null ;
if temp=2 then
SELECT `id`,
    `ACID`,
    `purchaseOrder`,
    `quantity`,
   # `t_header`.`deliveryDate`,
   DATE_FORMAT(`deliveryDate`,'%Y-%m-%d') deliveryDate,
    `vendor`,
    `createdDate`,
    `modifiedDate`,
    `createdBy`,
    `modifiedBy`,
    `invoiceAmt`,
    #`t_header`.`invoiceDate`,
     DATE_FORMAT(`invoiceDate`,'%Y-%m-%d') invoiceDate,
    `invoiceNo`,
    `name`
FROM `t_ast_header` where atid=4 and isActive=1;
end if;
if temp=1 then
#select * from EAM.t_header where uprice is not null;
SELECT `id`,
    `ACID`,
    `purchaseOrder`,
    `quantity`,
   # `t_header`.`deliveryDate`,
   DATE_FORMAT(`deliveryDate`,'%Y-%m-%d') deliveryDate,
    `vendor`,
    `createdDate`,
    `modifiedDate`,
    `createdBy`,
    `modifiedBy`,
    `invoiceAmt`,
    #`t_header`.`invoiceDate`,
     DATE_FORMAT(`invoiceDate`,'%Y-%m-%d') invoiceDate,
    `invoiceNo`,
    `name`,
    `uprice`,
    `color`,
    `brand`
FROM t_ast_header where atid=3 and isActive=1;
end if;
if temp=3 then
#select * from EAM.t_header where uprice is not null;
SELECT `id`,
    `ACID`,
    `softType`,`vendor`,
   # `t_header`.`deliveryDate`,   
    #`t_header`.`invoiceDate`,
     DATE_FORMAT(`invoiceDate`,'%Y-%m-%d') invoiceDate,
    `name`,
    `licenceRqd`,
    `description`,
    `licenceKey`,
    `users`,
    DATE_FORMAT(`licenceExpDate`,'%Y-%m-%d') licenceExpDate,
    DATE_FORMAT(`licencePurchaseDate`,'%y-%m-%d') licencePurchaseDate
FROM t_ast_header where atid=2 and isActive=1;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_addbug` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_addbug`(
userid int,
project int,
status varchar(50),
assingedto int,
priority varchar(50),
severity varchar(50),
technology varchar(50),
type varchar(50),
tentativeclosure varchar(50),
titlebox varchar(200),
description varchar(1000),
filepath varchar(200),
filename varchar(400),
orignalfilename varchar(200),
retid int
)
BEGIN
Select userEmail as emailId ,userPassword as pass from t_userdetails where id=assingedto;

select id from t_mastersdescription where code=
(select code from t_master where tablename = 'Status') 
AND isActive=1 and description1='New' into @stid;

INSERT INTO `t_bug_bugDetails`
(
`userId`,
`projectId`,
`assingedToUserId`,
`technology`,
`priority`,
`severity`,
`status`,
`type`,
`bugTitle`,
`bugDescription`,
`createdDate`,
`effectiveStartDate`,
`effectiveEndDate`,
`lastModifiedDate`,
`retailerId`,
`createdBy`,
`lastModifiedBy`
)
VALUES
(
userid,
project ,
assingedto ,
technology ,
priority ,
severity ,
@stid ,
type  ,
titlebox  ,
description ,
now(),
now(),
(select STR_TO_DATE(tentativeclosure, '%m/%d/%Y')),
now(),
retid,
userid,
userid
);

set @bugid=LAST_INSERT_ID();
if filepath is not null then
INSERT INTO  `t_bug_attachments`
(
`bugId`,
`userId`,
`filePath`,
`fileName`,
`orignalFileName`,
`uploadDate`,
`createdDate`,
`createdBy`,
`lastModifiedDate`,
`lastModifiedBy`,
`retailerId`
)
VALUES
(
@bugid,
userid,
filepath,
filename,
orignalfilename,
now(),
now(),
userid,
now(),
userid,
retid
);
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_addBugAttachment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_addBugAttachment`(
bugid int,
userid int,
filepath varchar(200),
filename varchar(400),
orignalfilename varchar(200),
retid int)
BEGIN

INSERT INTO `t_bug_attachments`
(
`bugId`,
`userId`,
`filePath`,
`fileName`,
`orignalFileName`,
`uploadDate`,
`createdDate`,
`createdBy`,
`lastModifiedDate`,
`lastModifiedBy`,
`retailerId`)
VALUES
(
bugid,
userid,
filepath,
filename,
orignalfilename,
now(),
now(),
userid,
now(),
userid,
retid
);

select bat.orignalFileName,bat.fileName,u.firstName,bat.createdDate 
from t_bug_attachments bat
join t_userdetails u on u.id=bat.userId
 where bat.bugID=bugid and bat.retailerId=retid;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_addComment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_addComment`(
bugid int,
comments varchar(500),
retid int,
userid int)
BEGIN
INSERT INTO `t_bug_comments`
(
`bugId`,
`userId`,
`comments`,
`createdDate`,
`createdBy`,
`lastModifiedDate`,
`lastModifiedBy`,
`retailerId`
)
VALUES
(
bugid,
userid,
comments,
now(),
userid,
now(),
userid,
retid
);

SELECT 
    bl.*, u.firstName
FROM
    t_bug_comments bl JOIN t_userdetails u ON u.id = bl.userId
 WHERE bl.bugId = bugid and bl.retailerId=retid; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_bugDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_bugDetails`(bugid varchar(50))
BEGIN

select b.*,
mt.description1 as technology,
  DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effectiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,
  u.firstName,p.projectTitle,md.description1 as statusName from 
t_bug_bugdetails b
join t_userdetails u on u.id=b.assingedToUserId
join t_projectdetails p on p.id = b.projectId
join t_mastersdescription md on md.id=b.status
join t_mastersdescription mt on mt.id=b.technology
where b.id=bugid  ;



select bl.*,bl.createdDate,u.firstName from t_bug_comments bl
join t_userdetails u on u.id = bl.userId 
where bl.bugId=bugid ; 

select bat.orignalFileName,bat.filePath,bat.fileName,u.firstName,bat.createdDate 
from t_bug_attachments bat

join t_userdetails u on u.id=bat.userId

 where bat.bugID=bugid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_bugHomeData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_bugHomeData`(asid int,role int,rtid int)
BEGIN


/* When user is Admin*/
 if(role=1) then
 select bugTitle,p.description1 as priority,s.description1 as status,DATE_FORMAT(b.createdDate,"%e.%b.%y") as createdDate
 ,pd.projectTitle as projectName from t_bug_bugdetails b inner join t_projectdetails pd on b.projectId=pd.id left join (Select * from t_mastersdescription where code=1) s on b.status=s.id
 left join (Select * from t_mastersdescription where code=2) p on b.priority=p.id
 where b.retailerId=rtid  and b.assingedToUserId=asid
 order by('createdDate') desc limit 10;
 
 select * from(
 select u.firstName,b.bugTitle,DATE_FORMAT(b.createdDate,"%e.%b.%y %H:%i") as createdDate,
DATE_FORMAT(b.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate,
 "bug" as flag 
,p.projectTitle as projectName
 from t_bug_bugDetails b  join t_userdetails u on u.id=b.userId 
inner join t_projectdetails p on b.projectId=p.id
where 
b.retailerId=rtid  
 union
 select u.firstName,b.bugTitle,DATE_FORMAT(bl.createdDate,"%e.%b.%y %H:%i"),
DATE_FORMAT(bl.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate,  
"comment" as flag

,p.projectTitle as projectName  from t_bug_comments bl join t_bug_bugdetails b on b.id=bl.bugId join t_userdetails u on 
u.id=bl.createdBy 
inner join t_projectdetails p on b.projectId=p.id
where b.retailerId=rtid  
 union
 select u.firstName,b.bugTitle,DATE_FORMAT(bat.createdDate,"%e.%b.%y %H:%i"),
DATE_FORMAT(bat.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate,
 "attachment" as flag
,p.projectTitle as projectName from t_bug_attachments bat join t_userdetails u 
on u.id=bat.userID join t_bug_bugdetails b on b.id=bat.userID 
inner join t_projectdetails p on b.projectId=p.id
where b.retailerId=rtid   
 ) ast /* where   ast.createdDate in (Date_Sub(now(),interval 1 day))*/ order by ast.createdDate desc  
 ;
/*When user is Admin -- uptill here*/
else
/* When user is Manager or Client*/
if  role =4 then
 select bugTitle,p.description1 as priority,s.description1 as status,DATE_FORMAT(b.createdDate,"%e.%b.%y") as createdDate
 ,pd.projectTitle as projectName from t_bug_bugdetails b inner join t_projectdetails pd on b.projectId=pd.id left join (Select * from t_mastersdescription where code=1) s on b.status=s.id
 left join (Select * from t_mastersdescription where code=2) p on b.priority=p.id
 where b.retailerId=rtid  and b.assingedToUserId=asid   
  and s.description1 not in('close') order by('createdDate') desc limit 10;
 
 select * from(
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(b.createdDate,"%e.%b.%y %H:%i") as createdDate,DATE_FORMAT(b.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate, "bug" as flag  from t_bug_bugdetails b  join t_userdetails u on u.id=b.userId 
inner join t_projectdetails p on b.projectId=p.id
 where p.id in (Select projectId from t_projectresourcemapping where userId=asid)
 union
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(bl.createdDate,"%e.%b.%y %H:%i"),DATE_FORMAT(bl.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate,  "comment" as flag  from t_bug_comments bl join t_bug_bugdetails b on b.id=bl.bugId join t_userdetails u on u.id=bl.createdBy 
inner join t_projectdetails p on b.projectId=p.id
 where p.id in (Select projectId from t_projectresourcemapping where userId=asid)
 union
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(bat.createdDate,"%e.%b.%y %H:%i"),DATE_FORMAT(bat.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate, "attachment" as flag from t_bug_attachments bat join t_userdetails u on u.id=bat.userID join t_bug_bugdetails b on b.id=bat.userID 
inner join t_projectdetails p on b.projectId=p.id
 where p.id in (Select projectId from t_projectresourcemapping where userId=asid)
 ) ast /* where   ast.createdDate in (Date_Sub(now(),interval 1 day))*/ order by ast.createdDate desc  
 ;

/* When user is Manager or Client uptill here.*/
else
if role=3 then

 select bugTitle,p.description1 as priority,s.description1 as status,DATE_FORMAT(b.createdDate,"%e.%b.%y") as createdDate
 ,pd.projectTitle as projectName from t_bug_bugdetails b inner join t_projectdetails pd on b.projectId=pd.id left join (Select * from t_mastersdescription where code=1) s on b.status=s.id
 left join (Select * from t_mastersdescription where code=2) p on b.priority=p.id
 where b.retailerId=rtid  and b.assingedToUserId=asid   
  and s.description1 not in('close') order by('createdDate') desc limit 10;
 
 select * from(
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(b.createdDate,"%e.%b.%y %H:%i") as createdDate,DATE_FORMAT(b.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate, "bug" as flag  from t_bug_bugdetails b  join t_userdetails u on u.id=b.userId 
inner join t_projectdetails p on b.projectId=p.id
 where p.id in 
(Select p.id from t_userdetails u inner join
 t_projectdetails p on p.clientID=u.clientID where u.id=asid)
 union
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(bl.createdDate,"%e.%b.%y %H:%i"),DATE_FORMAT(bl.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate,  "comment" as flag  from t_bug_comments bl join t_bug_bugdetails b on b.id=bl.bugId join t_userdetails u on u.id=bl.createdBy 
inner join t_projectdetails p on b.projectId=p.id
 where p.id in  
(Select p.id from t_userdetails u inner join
 t_projectdetails p on p.clientID=u.clientID where u.id=asid)
 union
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(bat.createdDate,"%e.%b.%y %H:%i"),DATE_FORMAT(bat.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate, "attachment" as flag from t_bug_attachments bat join t_userdetails u on u.id=bat.userID join t_bug_bugdetails b on b.id=bat.userID 
inner join t_projectdetails p on b.projectId=p.id
 where p.id in
(Select p.id from t_userdetails u inner join
 t_projectdetails p on p.clientID=u.clientID where u.id=asid)
 ) ast /* where   ast.createdDate in (Date_Sub(now(),interval 1 day))*/ order by ast.createdDate desc  
 ;


else


/* When user is only user*/


select bugTitle,p.description1 as priority,s.description1 as status,DATE_FORMAT(b.createdDate,"%e.%b.%y") as createdDate
 ,pd.projectTitle as projectName from t_bug_bugdetails b inner join t_projectdetails pd on b.projectId=pd.id left join (Select * from t_mastersdescription where code=1) s on b.status=s.id
 left join (Select * from t_mastersdescription where code=2) p on b.priority=p.id
 
 where b.assingedToUserId=asid  
 
  and s.description1 not in('close') order by('createdDate') desc limit 10;
 
 select * from(
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(b.createdDate,"%e.%b.%y %H:%i") as createdDate,DATE_FORMAT(b.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate, "bug" as flag  from t_bug_bugdetails b  join t_userdetails u on u.id=b.userId 
inner join t_projectdetails p on b.projectId=p.id
 where b.assingedToUserId=asid or b.userId=asid 
 union
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(bl.createdDate,"%e.%b.%y %H:%i"),DATE_FORMAT(bl.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate,  "comment" as flag  from t_bug_comments bl join t_bug_bugdetails b on b.id=bl.bugId join t_userdetails u on u.id=bl.createdBy 
inner join t_projectdetails p on b.projectId=p.id
where b.assingedToUserId=asid or b.userId=asid and bl.userId=asid
 union
 select u.firstName,p.projectTitle as projectName,b.bugTitle,DATE_FORMAT(bat.createdDate,"%e.%b.%y %H:%i"),DATE_FORMAT(bat.lastModifiedDate,"%e.%b.%y %H:%i") aslastModifiedDate, "attachment" as flag from t_bug_attachments bat join t_userdetails u on u.id=bat.userID join t_bug_bugdetails b on b.id=bat.userID 
inner join t_projectdetails p on b.projectId=p.id
where b.assingedToUserId=asid or b.userId=asid 
 ) ast /* where   ast.createdDate in (Date_Sub(now(),interval 1 day))*/ order by ast.createdDate desc  
 ;
end if;
end if;
end if;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_filterBug` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_filterBug`(
             statusIs varchar(100) ,
			 status1 varchar(100),
			 priorityIs varchar(100),
			 priority varchar(100),
			 severityIs varchar(100),
			 severity varchar(100),
			 assingedtoIs varchar(100),
			 assingedto varchar(200),
			 technologyIs varchar(100),
			 technology varchar(100),
             userid int,
			 retid int,roleid int
)
BEGIN

Declare varStatus Varchar(500);
Declare varPriority Varchar(500);
Declare varAssingedto Varchar(500);
Declare varSeverity Varchar(500);
Declare varTechnology Varchar(500);

#select projectId from t_bug_bugdetails where userId=userid limit 1 into @tempid;
select * from t_projectdetails where retailerId=retid and isActive=1 ;

select * from t_mastersdescription where code=(select code from t_master
 where tablename = 'status');

#select * from t_userdetails where retailerId=retid;
Select u.id as userId,concat(u.firstName,' ',u.lastName) as name,p.projectId
 from t_projectresourcemapping p inner join t_userdetails u on p.userId=u.id where u.retailerId=retid;



select * from t_mastersdescription where code=(select code from t_master where tablename = 'priority');

select * from t_mastersdescription where code=(select code from t_master where tablename = 'severity');

#select * from t_mastersdescription where code=(select code from t_master where tablename = 'technology');
select distinct d.* from t_mastersdescription d inner join
 t_projecttechnologymapping t on t.technologyId=d.id where d.code =
(select code from t_master where tablename = 'Technology') AND d.isActive=1
And   t.projectId in (select projectId from t_bug_bugdetails bdt where bdt.userId=userid);



select * from t_mastersdescription where code=(select code from t_master where tablename = 'type');


if status1='' then
Set varStatus = '';
Else 
call sp_split(status1,null,'statustemp');
Set varStatus = ConCat("  and b.status ",statusIs," (Select variable from statustemp)");
end if;

if priority='' then
Set varPriority = '';
Else 
call sp_split(priority,null,'prioritytemp');
Set varPriority = ConCat(" and b.priority ",priorityIs," (Select variable from prioritytemp)");
end if;

if severity='' then
Set varSeverity = '';
Else 
call sp_split(severity,null,'severitytemp');
Set varSeverity = ConCat(" and b.severity ",severityIs," (Select variable from severitytemp)");
end if;
#Select 'hello';
if assingedto='' then
Set varAssingedto = '';
Else 
call sp_split(assingedto,null,'assingedtotemp');
Set varAssingedto = ConCat(" and b.assingedToUserId ",assingedtoIs," (Select variable from assingedtotemp)");
end if;

if technology='' then
Set varTechnology = '';
Else 
call sp_split(technology,null,'technologytemp');
Set varTechnology = ConCat(" and b.technology ",technologyIs," (Select variable from technologytemp)");
end if;

if(roleid=1) then 

SET @t1 =CONCAT(
"select distinct b.*,
 DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effectiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,

p.projectTitle ,
(Select firstName from t_userdetails where id = b.assingedToUserId ) as firstName
from t_bug_bugdetails b 
join t_projectdetails p on p.id=b.projectId 
where b.retailerId=",retid," and 1=" ,1, varStatus,varPriority,varSeverity,varAssingedto,varTechnology,";");

else

if(roleid=3) then 

SET @t1 =CONCAT(
"select distinct b.*,
 DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effectiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,
p.projectTitle ,
(Select firstName from t_userdetails where id = b.assingedToUserId ) as firstName
from t_bug_bugdetails b 
join t_projectdetails p on p.id=b.projectId 
where b.retailerId=",retid," and 1=" ,1, varStatus,varPriority,varSeverity,varAssingedto,varTechnology," and p.id in (
Select p.id from t_userdetails u inner join
 t_projectdetails p on p.clientID=u.clientID where u.id=",userid,");");

else

if(roleid=4) then 

SET @t1 =CONCAT(
"select distinct b.*,
 DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effecvtiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,
p.projectTitle ,
(Select firstName from t_userdetails where id = b.assingedToUserId ) as firstName
from t_bug_bugdetails b 
join t_projectdetails p on p.id=b.projectId 
where b.retailerId=",retid," and 1=" ,1, varStatus,varPriority,varSeverity,varAssingedto,varTechnology," and p.id in (
Select projectId from t_projectresourcemapping where user_id=",userid,");");

else


SET @t1 =CONCAT(
"select distinct b.*,
 DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effectiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,
p.projectTitle ,
(Select firstName from t_userdetails where id = b.assingedToUserId ) as firstName
from t_bug_bugdetails b 
join t_projectdetails p on p.id=b.projectId 
where b.retailerid=",retid," and b.userId=" ,userid, varStatus,varPriority,varSeverity,varAssingedto,varTechnology,";");

end if;

end if;

end if;

#Select @t1;
PREPARE stmt3 FROM @t1;
 EXECUTE stmt3;
 DEALLOCATE PREPARE stmt3;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_getAllTechnology` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_getAllTechnology`(pid int)
BEGIN
select id from t_projectdetails where id=pid And isActive=1
  limit 1 into @tempid;
  if @tempid>0 then
select d.* from t_mastersdescription d inner join
 t_projecttechnologymapping t on t.technologyId=d.id where d.code=
(select code from t_master where tablename = 'technology') AND d.isActive=1

And   t.projectId = pid;

select r.*,u.firstName  from t_projectresourcemapping r
 inner join t_projectdetails p on p.id=r.projectId
 join t_userdetails u on u.id=r.userId
 where r.isActive=1 and p.isActive=1 and p.id=pid;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_raiseBug` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_raiseBug`(
uid int,rid int,retid int
)
BEGIN

select id from t_projectdetails where
 retailerId=retid and isActive=1 limit 1 into @tempid;

if rid=3 then
select * from t_projectdetails where retailerId=retid and isActive=1 and
clientid in (select clientId from t_userdetails u where u.id=uid and isClient=1);
else

if rid=1 then
Select p.* from t_projectdetails p  where  p.retailerId=retid   and p.isActive=1;

else
Select p.* from t_projectdetails p  inner join t_projectresourcemapping r on p.id=r.projectId 
where r.userId=uid and p.retailerId=retid   and p.isActive=1
;

end if;
#select * from t_projectdetails where retailerId=retid   and isActive=1;
end if;
select * from t_mastersdescription where code=(select code from t_master where tablename = 'Status') AND isActive=1;

#select * from t_userdetails where retailerId=retid and isActive=1;
 select * from t_userdetails where id in(
 Select userId from t_projectresourcemapping where projectId=@tempid) and isActive=1;

select * from t_mastersdescription where code=(select code from t_master where tablename = 'Priority') AND isActive=1;

select * from t_mastersdescription where code=(select code from t_master where tablename = 'Severity') AND isActive=1;

#select * from t_mastersdescription where code=(select code from t_master where tablename = 'technology') AND isActive=1;

select d.* from t_mastersdescription d inner join t_projecttechnologymapping t on t.technologyId=d.id
 where d.code=
(select code from t_master where tablename = 'Technology') AND d.isActive=1
And   t.projectId = @tempid;

select * from t_mastersdescription where code=(select code from t_master where tablename = 'Type') AND isActive=1;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_updatebugdetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_updatebugdetails`(
bugid int,colname varchar(100),value1 varchar(10000),user varchar(50)
)
BEGIN
declare changeby varchar(50);
declare cStatus varchar(10);
select md.description1 from t_mastersdescription md where md.id=value1 into cStatus; 
If(colname='Status') then 
Set changeby=(Select concat(firstname,' ',lastname) from t_userdetails where id=user );
INSERT INTO `t_bug_comments`
(
`bugId`,
`userId`,
`comments`,
`createdDate`,
`createdBy`,
`retailerId`,
`lastModifiedDate`,
`lastModifiedBy`)
Select 

 b.id,
    b.`assingedToUserId`,
    concat('Last Status : ',Ifnull(md.`description1`,''),'  Current Status : ',Ifnull(cStatus,'') ,'   Updated By : ',changeby),
 
 b.`createdDate`,
       b.`createdBy`,
  
      b.`retailerId`,
    Now(),
	user
from t_bug_bugdetails b   join t_mastersdescription md on md.id=b.status 
where b.id=bugid;


end if;

if(colname!='effectiveEndDate') then
SET @s = CONCAT('UPDATE t_bug_bugdetails set ',colname,'="',value1,'",lastModifiedDate = now(),lastModifiedBy=',user,' where id= ',bugid);

    PREPARE stmt FROM @s;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
    else
    
    
    UPDATE t_bug_bugdetails set effectiveEndDate=STR_TO_DATE(value1,'%m/%d/%Y'),
    lastModifiedDate = now(),lastModifiedBy=user
    where id=bugid;
    /*SET @s = CONCAT("UPDATE t_bug set ",colname,"=","STR_TO_DATE('",value1,"' '%d/%m/%Y'),","lastModifiedDate = now(),lastModifiedBy=",user," where id= ",bugid);

Select @s;
    PREPARE stmt FROM @s;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;*/
    
    
    end if;
    

    Select b.*,s.description1 from t_bug_bugdetails b inner join t_userdetails u on b.assingedToUserId=u.id 
 inner join (select * from t_mastersdescription where code=1) as s on b.status=s.id
 where b.id=bugid;
   # Select * from t_bug b inner join t_userdetails u on b.assingedToUserId=u.id where b.id=bugid;
If(colname='Status' and value1=4) then 
    
     Select * from t_bug_bugdetails b inner join t_userdetails u on b.createdBy=u.id where b.id=bugid;
     else
     
     Select '' as userEmail;
    end if;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_bug_viewBug` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_bug_viewBug`(uid int,roleid int,retid int)
BEGIN
#select projectId from t_bug_bugdetails where userId=uid limit 1 into @tempid;

if(roleid=1) then 
select
  b.*,
 DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effectiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,
u.firstName,
b.createdBy,
p.projectTitle 
from t_bug_bugdetails b
join t_userdetails u on u.id=b.assingedToUserId
join t_projectdetails p on p.id=b.projectId 
 where b.retailerId=retid 
order by(b.createdDate) desc;

else 
if(roleid=3) then 
#Select p.id from t_userdetails u inner join   t_projectdetails p on p.clientId=u.clientID where u.id=uid into @tempid;
#select projectId from t_bug where userId=uid limit 1 into @tempid;
select
  b.*,
 DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effectiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,
u.firstName,
b.createdBy,
p.projectTitle 
from t_bug b
join t_user u on u.id=b.assingedToUserId
join t_projectdetails p on p.id=b.projectId 
 where b.retailerId=retid and p.id in (Select p.id from t_user u inner join
 t_projectdetails p on p.clientID=u.clientID where u.id=uid)
order by(b.createdDate) desc;

else
if(roleid=4) then 
#Select projectId from t_projectresourcemapping where userId=uid into @tempid; 
 
select
  b.*,
 DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effectiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,
u.firstName,
b.createdBy,
p.projectTitle 
from t_bug_bugdetails b
join t_userdetails u on u.id=b.assingedToUserId
join t_projectdetails p on p.id=b.projectId 
 where b.retailerId=retid and p.id in ((Select projectId from
 t_projectresourcemapping where userId=uid)
 )
order by(b.createdDate) desc;
else
select
  b.*,
 DATE_FORMAT(b.createdDate,'%e-%b-%y') AS createdDate,
 DATE_FORMAT(b.effectiveStartDate,'%e-%b-%y') AS startdate,
DATE_FORMAT(b.effectiveEndDate,'%e-%b-%y') as enddate,
u.firstName,
b.createdBy ,
p.projectTitle
from t_bug_bugdetails b
join t_userdetails u on u.id=b.assingedToUserId
join t_projectdetails p on p.id=b.projectId 
 where b.retailerId=retid and b.assingedToUserId=uid or b.userId=uid
order by(b.createdDate) desc
;
end if;
end if;
end if;
select*from t_projectdetails where retailerId=retid and isActive=1 ;

select * from t_mastersdescription where code=(select code from t_master where tablename = 'Status');
#-------------------Assinged to-----
#select * from t_user where retailerId=retid;
Select distinct u.id as userId,concat(u.firstName,' ',u.lastName) as name,p.projectId
 from t_projectresourcemapping p inner join t_userdetails u on p.userId=u.id where u.retailerId=retid;

select * from t_mastersdescription where code=(select code from t_master where tablename = 'Priority');

select * from t_mastersdescription where code=(select code from t_master where tablename = 'severity');

#select * from t_mastersdescription where code=(select code from t_master where tablename = 'technology');



select distinct d.* from t_mastersdescription d inner join
 t_projecttechnologymapping t on t.technologyId=d.id where d.code =
(select code from t_master where tablename = 'Technology') AND d.isActive=1
And   t.projectId in (select projectId from t_bug_bugdetails where userId=uid);

select * from t_mastersdescription where code=(select code from t_master where tablename = 'Type');

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_changeAssignmentStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_changeAssignmentStatus`(aid int)
BEGIN
select isActive from t_assignment where id=aid into @tempstatus;
if @tempstatus=1 then
UPDATE t_assignment
SET
isActive = 0
where id=aid ;
else
UPDATE t_assignment
SET
isActive = 1
where id=aid ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_changeClientStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_changeClientStatus`(cid int,flag int,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
if flag=1 then
 update t_clients set isActive=0 where id=cid  and retailerId=inRetailerId;
elseif flag=0 then
update t_clients set isActive=1 where id=cid  and retailerId=inRetailerId;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_changePassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_changePassword`(uid int,npassword varchar(50), oldpassword varchar(50) )
BEGIN
declare i int default 1;
set @temp = (select t.userPassword from t_userdetails t Where t.id=uid) ;

if @temp=oldpassword then
select i ;
update t_userdetails
set `userPassword`=npassword;
else 
set i=0;
select i;

end if;


end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_changeProjectStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_changeProjectStatus`(pid int,flag int,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
if flag=1 then
 update t_projectdetails set isActive=0 where id=pid  and retailerId=inRetailerId;
elseif flag=0 then
update t_projectdetails set isActive=1 where id=pid  and retailerId=inRetailerId;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_changeWbsStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_changeWbsStatus`(wbsid1 int,flag int,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN

if flag=1 then
update t_wbs set WBSStatus=0 where WBSId=wbsid1  and retailerId=inRetailerId;

else
update t_wbs set WBSStatus=1 where WBSId=wbsid1  and retailerId=inRetailerId;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_createAssignmentData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_createAssignmentData`(a int(11),flag int(11),retId int)
BEGIN
IF flag=0
then
Select firstName,id from t_userdetails where retailerId=retId;

Select  id,pcode from t_projectDetails where retailerId=retId;

Select distinct w.projectId,w.WBSCode,w.WBSId,us.id as userId,us.firstName,
w.WBSName,w.wplannedStartDate,w.wplannedEndDate from t_wbs as w
inner join t_projectresourcemapping as prm on w.projectId=prm.projectId
left outer join t_userdetails as us on prm.userId=us.id where us.retailerId=retId;


else 
if flag=1
then
Select firstName,id from t_userdetails where retailerId=retId;
Select  id,pcode from t_projectDetails where retailerId=retId;

Select * from t_assignment as t inner join t_wbs as w on t.WBSID=w.WBSId
WHERE t.id = a and t.retailerId=retId;

Select u.id from t_userdetails as u 
inner join t_mapUserAssig as m on  u.id=m.userId 
inner join t_assignment as assig on m.assId=assig.id
WHERE assig.id = a and assig.retailerId=retId;
end if;
end if;
select *from t_wbs where retailerId=retId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_createRetailerUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_createRetailerUser`(inId int,
infirstName varchar(200),inlastName varchar(200),inemailId varchar(200),
incontactNumber varchar(20),inbillingRate varchar(20),inuserRole int,
inmanager varchar(20),in defaultModule varchar(50),
incustomRole int,inpassword varchar(20),
 inuserId int,inroleId int,in retailerId int
)
BEGIN

Select case when inmanager='' then 0 else inmanager end into @mgr;
Select count(1) from t_userdetails where userEmail=inemailId and id !=inId into @ifExist;


if @ifExist=0 THEN
Select id from t_portalmodules where Name=defaultModule into @indefaultModuleId;

if inId =0 then
INSERT INTO `portal`.`t_userdetails`
(
`firstName`,
`lastName`,
`userEmail`,
`contactNumber`,
`userPassword`,
`roleId`,
`retailerId`,
`managerId`,
`createdDate`,
`createdBy`,
`lastModifiedDate`,
`lastModifiedBy`,
`billingAmount`,
`defaultModuleId`)
VALUES
(infirstName,inlastName,inemailId,incontactNumber,inpassword,inuserRole,
retailerId,@mgr,now(),inuserId,now(),inuserId,inbillingRate,@indefaultModuleId);

Set  @ifExist=0;
ELSE
UPDATE `portal`.`t_userdetails`
SET
`firstName` =infirstName,
`lastName` = inlastName,
`userEmail` = inemailId,
`contactNumber` = incontactNumber, 
`roleId` =inuserRole,
`managerId` =@mgr,
`lastModifiedDate` =now(),
`lastModifiedBy` = inuserId,
`billingAmount` =inbillingRate,
`defaultModuleId` =@indefaultModuleId
WHERE `id` = inId;
Set  @ifExist=1;
end if;
else
Set  @ifExist=2;
end if;

Select  @ifExist as flag;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_confirmedFile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_confirmedFile`(in inUserId int, in inRoleId int,
in inRetailerId int,active int(10))
BEGIN
declare temp int default 100 ;
 UPDATE t_doc_file
SET
isConfirmed = 1
WHERE id = active;
set temp=(select userId from t_doc_file where id=active) ;
select userEmail from t_userdetails where id=temp ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_customRoleEntry` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_customRoleEntry`(
in retId int,cusId int,
cusRole varchar(255),industry_name varchar(255),
business_name varchar(255),document_type varchar(255),
tech varchar(255),res_level varchar(255),
indhide varchar(255),busshide varchar(255),
dochide varchar(255),techide varchar(255),
rlevelhide varchar(255))
BEGIN

Select count(1) from t_doc_customrole where description=cusRole into @ifExist;
if(@ifExist=0 ) then 
call `usp_split_nr` (industry_name,',','temp1');
call `usp_split_nr` (business_name,',','temp2');
call `usp_split_nr` (document_type,',','temp3');
call `usp_split_nr` (tech,',','temp4');
call `usp_split_nr` (res_level,',','temp5');

if cusId =0 then
insert into t_doc_customRole (description,retailerId) values (cusRole,retId);
set @lid=LAST_INSERT_ID();
insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,1, variable from temp1); 
drop table temp1;
insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,2, variable from temp2); 
drop table temp2;
insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,3, variable from temp3); 
drop table temp3;
insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,4, variable from temp4); 
drop table temp4;

insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,5, variable from temp5); 
drop table temp5;
select 1 as flag;
else
delete from t_doc_attachRolemap where crole_id=cusId;
update t_doc_customrole set `description`=cusRole where id=cusId;
insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId ,1, variable from temp1); 
drop table temp1;

insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId,2, variable from temp2); 
drop table temp2;

insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId,3, variable from temp3); 
drop table temp3;


insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId ,4, variable from temp4); 
drop table temp4;

insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId ,5, variable from temp5); 
drop table temp5;
select 2 as flag;
end if;

else 
select 3 as flag;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_customRoleUpdate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_customRoleUpdate`(
in retId int,cusId int,
cusRole varchar(255),industry_name varchar(255),
business_name varchar(255),document_type varchar(255),
tech varchar(255),res_level varchar(255),
indhide varchar(255),busshide varchar(255),
dochide varchar(255),techide varchar(255),
rlevelhide varchar(255))
BEGIN


call `usp_split_nr` (industry_name,',','temp1');
call `usp_split_nr` (business_name,',','temp2');
call `usp_split_nr` (document_type,',','temp3');
call `usp_split_nr` (tech,',','temp4');
call `usp_split_nr` (res_level,',','temp5');

if cusId =0 then
Select count(1) from t_doc_customrole where description=cusRole into @ifExist;
if(@ifExist=0 ) then 
insert into t_doc_customRole (description,retailerId) values (cusRole,retId);
set @lid=LAST_INSERT_ID();
insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,1, variable from temp1); 
drop table temp1;
insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,2, variable from temp2); 
drop table temp2;
insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,3, variable from temp3); 
drop table temp3;
insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,4, variable from temp4); 
drop table temp4;

insert into t_doc_attachrolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,5, variable from temp5); 
drop table temp5;
select 1 as flag;
else
select 3 as flag;

end if;

else 

Select count(1) from t_doc_customrole where description=cusRole and id !=cusId into @ifExist;
if(@ifExist=0 ) then 
delete from t_doc_attachRolemap where crole_id=cusId;
update t_doc_customrole set `description`=cusRole where id=cusId;
insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId ,1, variable from temp1); 
drop table temp1;

insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId,2, variable from temp2); 
drop table temp2;

insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId,3, variable from temp3); 
drop table temp3;


insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId ,4, variable from temp4); 
drop table temp4;

insert into t_doc_attachRolemap(`crole_id`,`vertical_id`,`verticalvalues_id`) 
 ( select cusId ,5, variable from temp5); 
drop table temp5;
select 2 as flag;
else
select 3 as flag;

end if;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_deleteFileById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_deleteFileById`(in inUserId int, in inRoleId int,
in inRetailerId int,active int(11),remark varchar(500))
BEGIN
 UPDATE `t_doc_file`
SET
isConfirmed = -2,
REMARKS=remark
WHERE `id` =active;
select fpath from t_doc_file where id =active ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getAllBusiness` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getAllBusiness`(in inUserId int, in inRoleId int,
in inRetailerId int,in croleid int )
BEGIN
if inRoleId=1 then
SELECT v.id,vv.id as values_id ,vv.values FROM `portal`.t_doc_verticals v
inner join `portal`.t_doc_verticalValues vv
on v.id=vv.verticalid
where v.id=2 ;
else
SELECT  rp.vertical_id as id, vv.id as values_id ,
rp.crole_id,vv.`values`  FROM t_doc_attachrolemap rp join 
t_doc_verticalValues vv
 on rp.verticalvalues_id=vv.id where crole_id=croleid and rp.vertical_id =2;
end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getAllDocument` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getAllDocument`(in inUserId int, in inRoleId int,
in inRetailerId int,in croleid int )
BEGIN
if inRoleId=1 then
SELECT v.id,vv.id as values_id ,vv.values FROM `portal`.t_doc_verticals v
inner join `portal`.t_doc_verticalValues vv
on v.id=vv.verticalid
where v.id=3 ;
else
SELECT  rp.vertical_id as id, vv.id as values_id ,
rp.crole_id,vv.`values`  FROM t_doc_attachrolemap rp join 
t_doc_verticalValues vv
 on rp.verticalvalues_id=vv.id where crole_id=croleid and rp.vertical_id =3;
end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getallFilesandFolder` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getallFilesandFolder`(in inUserId int, 
in inRoleId int,in inRetailerId int,in croleid int)
BEGIN
if(inRoleId=1) then 
SELECT * from t_doc_file where isConfirmed=1 and isActive=1 ;


else 
select * from t_doc_file where id in (select t1.file_id  from (
select  file_id  
FROM t_doc_attachRolemap rm join t_doc_attachFileMap fm 
on   rm.verticalvalues_id=fm.verticalvalues_id where
  rm.crole_id=croleid and rm.vertical_id=1
 ) as t1
inner join 
(select  file_id  FROM t_doc_attachRolemap rm join t_doc_attachFileMap fm 
on   rm.verticalvalues_id=fm.verticalvalues_id where
  rm.crole_id=croleid and rm.vertical_id=2) as t2 
inner join 
(select  file_id  FROM t_doc_attachRolemap rm join t_doc_attachFileMap fm 
on   rm.verticalvalues_id=fm.verticalvalues_id where
  rm.crole_id=croleid and rm.vertical_id=3) as t3 
inner join
(select  file_id  FROM t_doc_attachRolemap rm join t_doc_attachFileMap fm 
on   rm.verticalvalues_id=fm.verticalvalues_id where
  rm.crole_id=croleid and rm.vertical_id=4) as t4 
inner join
(select  file_id  FROM t_doc_attachRolemap rm join t_doc_attachFileMap fm 
on   rm.verticalvalues_id=fm.verticalvalues_id where
  rm.crole_id=croleid and rm.vertical_id=5) as t5 
on t1.file_id=t2.file_id and t2.file_id=t3.file_id and t3.file_id=t4.file_id and t4.file_id=t5.file_id
group by t1.file_id) and isConfirmed=1;

end if;



END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getAllFilesNotConfirmed` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getAllFilesNotConfirmed`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
SELECT * from t_doc_file where isConfirmed=-1;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getAllIndustry` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getAllIndustry`(in inUserId int, in inRoleId int,
in inRetailerId int,in croleid int )
BEGIN
if inRoleId=1 then
SELECT v.id,vv.id as values_id ,vv.values FROM `portal`.t_doc_verticals v
inner join `portal`.t_doc_verticalValues vv
on v.id=vv.verticalid
where v.id=1 ;
else
SELECT  rp.vertical_id as id, vv.id as values_id ,
rp.crole_id,vv.`values`  FROM t_doc_attachrolemap rp join 
t_doc_verticalValues vv
 on rp.verticalvalues_id=vv.id where crole_id=croleid and rp.vertical_id =1;
end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getAllRestriction` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getAllRestriction`(in inUserId int, in inRoleId int,
in inRetailerId int,in croleid int )
BEGIN
if inRoleId=1 then
SELECT v.id,vv.id as values_id ,vv.values FROM `portal`.t_doc_verticals v
inner join `portal`.t_doc_verticalValues vv
on v.id=vv.verticalid
where v.id=5 ;
else
SELECT  rp.vertical_id as id, vv.id as values_id ,
rp.crole_id,vv.`values`  FROM t_doc_attachrolemap rp join 
t_doc_verticalValues vv
 on rp.verticalvalues_id=vv.id where crole_id=croleid and rp.vertical_id =5;
end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getAllTechnology` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getAllTechnology`(in inUserId int, in inRoleId int,
in inRetailerId int,in croleid int )
BEGIN
if inRoleId=1 then
SELECT v.id,vv.id as values_id ,vv.values FROM `portal`.t_doc_verticals v
inner join `portal`.t_doc_verticalValues vv
on v.id=vv.verticalid
where v.id=4 ;
else
SELECT  rp.vertical_id as id, vv.id as values_id ,
rp.crole_id,vv.`values`  FROM t_doc_attachrolemap rp join 
t_doc_verticalValues vv
 on rp.verticalvalues_id=vv.id where crole_id=croleid and rp.vertical_id =4;
end if ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getCustomRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getCustomRoles`(in inUserId int, in inRoleId int,
in inRetailerId int,in userid int)
BEGIN

declare temp int default 0 ;
SELECT `t_doc_customrole`.`id`,
    `t_doc_customrole`.`description`,
    `t_doc_customrole`.`retailerId`
FROM `portal`.`t_doc_customrole` where retailerId=inRetailerId or id=1;
set temp=(select crole_id from t_userdetails where id=userid);
select  * from t_doc_customrole where id=temp ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getCustomRolesVerticals` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getCustomRolesVerticals`(in cRoleId int)
BEGIN

select q.id,q.crole_id,q.vertical_id,group_concat(q.verticalvalues_id) as vvid,q.description from 
(SELECT cr.description,b.id,b.crole_id, b.vertical_id,b.verticalvalues_id,vv.`values` 
FROM portal.t_doc_attachRolemap b inner join t_doc_verticalValues vv 
on b.verticalvalues_id=vv.id 
inner join t_doc_customRole cr on b.crole_id=cr.id where
 b.crole_id=cRoleId and b.vertical_id in (1,2,3,4,5) ) q group by(q.vertical_id);
/*SELECT cr.description,b.id,b.crole_id, b.vertical_id,b.verticalvalues_id,vv.`values` 
FROM portal.t_doc_attachRolemap b inner join t_doc_verticalValues vv 
on b.verticalvalues_id=vv.id 
inner join t_doc_customRole cr on cr.id=cRoleId
 where b.crole_id=cRoleId and b.vertical_id in (1,2,3,4,5) ;*/

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_getUserCRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_getUserCRoles`(in inUserId int, in inRoleId int,
in inRetailerId int,in croleid int )
BEGIN
select concat(u.firstName," ",u.lastName) as name 

from t_userdetails u where crole_id=croleid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_insertFile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_insertFile`(in inUserId int, 
in inRetailerId int ,in path varchar(500),
in parentIdin int(11),in fname varchar(500),
in descc varchar(5000), in authhname varchar(500),
in industry varchar(255),in business varchar(255),
in filetitle varchar(500),in dtype varchar(255),
in tec varchar(100),in rol int(2),in restrictLevel varchar(255),
in indhide varchar(255),in busshide varchar(255),
in dochide varchar(255),in techide varchar(255),
in levelhide varchar(255),in parsedData varchar(15000))
BEGIN
drop table if exists parseTable;
if (rol =1) then
insert into t_doc_file(`name`,`parentId`,`description`,`author`,`fpath`,`uploadDate`,
`title`,`roleid`,`restriction`,`isConfirmed`,`userId`) 
values(fname,parentIdin,descc,authhname,path,DATE_FORMAT(NOW(), '%d/%m/%Y'),
filetitle,rol,restrictLevel,1,inUserId);
else
insert into t_doc_file(`name`,`parentId`,`description`,`author`,`fpath`,`uploadDate`,
`title`,`roleid`,`restriction`,`isConfirmed`,`userId`) 
values(fname,parentIdin,descc,authhname,path,DATE_FORMAT(NOW(), '%d/%m/%Y'),
filetitle,rol,restrictLevel,-1,inUserId);
end if ;
set @lid = last_insert_id();
call `usp_split_nr` (industry,',','temp1');
call `usp_split_nr` (business,',','temp2');
call `usp_split_nr` (dtype,',','temp3');
call `usp_split_nr` (tec,',','temp4');
call `usp_split_nr` (restrictLevel,',','temp5');

insert into t_doc_attachFileMap(`file_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,indhide, variable from temp1); 
drop table temp1;

insert into t_doc_attachFileMap(`file_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,busshide, variable from temp2); 
drop table temp2;

insert into t_doc_attachFileMap(`file_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,dochide, variable from temp3); 
drop table temp3;


insert into t_doc_attachFileMap(`file_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,techide, variable from temp4); 
drop table temp4;

insert into t_doc_attachFileMap(`file_id`,`vertical_id`,`verticalvalues_id`) 
 ( select @lid ,levelhide, variable from temp5); 
drop table temp5;

if parsedData is not null then
call usp_split_nr(parsedData,',','parseTable');
set @inc = 1;
set @maxid = (select max(id) from parseTable);
while @inc<= @maxid do
set @x = (select id from t_doc_parseddata where parsedWord = ( select variable from parseTable where id = @inc)) ;
if @x is null then
insert into t_doc_parseddata values (0, ( select variable from parseTable where id = @inc),@lid);
else 
update t_doc_parsedData set fileIds = concat(fileIds ,',',@lid) where id = @x;
end if;
set @inc = @inc+1;
end while;
drop table parseTable;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_parsedData` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_parsedData`(searchItems text,rol_id int,croleid int)
BEGIN

SET searchItems = REPLACE(searchItems,' ',',');

call usp_split_nr(searchItems,',','fileKeywords');
set @totalStrings = (select max(id) from fileKeywords); 
set @inc  = 1;
set @queryString = 'Select concat("(",GROUP_CONCAT(d.id),")") from t_doc_file d where ';
while @inc<= @totalStrings do
set @allIds = (SELECT concat('(',GROUP_CONCAT( distinct fileIds),')') as fileIds from  portal.t_doc_parseddata where parsedWord like (select concat('%',variable,'%') from fileKeywords where Id =@inc) group by id*0) ;
if @inc = @totalStrings then
set @queryString = concat(@queryString,' id in ',@allIds,' group by d.id*0 into @ParsedR ;');
else 
set @queryString = concat(@queryString,' id in ',@allIds,' and ');
end if;
set @inc = @inc +1;
end while;
if @queryString is not null then
PREPARE stmt FROM @queryString;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
SET @sql:=CONCAT("
Select * , 'yellow' as color from t_doc_file f where id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=1 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@ni=' ' or b.verticalvalues_id in(Select variable from tempi))
) 

and id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=2 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@nb=' ' or b.verticalvalues_id in(Select variable from tempb))
) 

and id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=3 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@nd=' ' or b.verticalvalues_id in(Select variable from tempd))
)

and id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=4 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@nt=' ' or b.verticalvalues_id in(Select variable from tempt))
)
and id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=5 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@nr=' ' or b.verticalvalues_id in(Select variable from tempr))
) and f.isConfirmed=1 and f.id in", @ParsedR);


PREPARE dynamic_statement FROM @sql;
EXECUTE dynamic_statement;
DEALLOCATE PREPARE dynamic_statement;
else
select * , 'yellow' as color from t_doc_file where id = 0;
end if;

drop table fileKeywords;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_rejectedFiles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_rejectedFiles`(in inUserId int, 
in inRoleId int,in inRetailerId int	)
BEGIN
if inRoleId=1 then
select * from t_doc_file where isConfirmed=0 ;
else
select * from t_doc_file where isConfirmed=0  and userId=inUserId ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_rejectFileById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_rejectFileById`(in inUserId int, in inRoleId int,
in inRetailerId int,active int(11),remark varchar(500))
BEGIN
declare temp int default 100 ;
UPDATE `t_doc_file`
SET
isConfirmed = 0,
REMARKS=remark
WHERE `id` =active;
set temp=(select userId from t_doc_file where id=active) ;
select userEmail from t_userdetails where id=temp ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_searchFiles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_searchFiles`(nb varchar(45),nd varchar(45),
ni varchar(255),nt varchar(255),nr varchar(200),globalSearch varchar(16000)
,rol_id int(11),croleid int,in retailerId int)
BEGIN
call `usp_split_nr` (nb,',','tempb');
call `usp_split_nr` (nd,',','tempd');
call `usp_split_nr` (ni,',','tempi');
call `usp_split_nr` (nt,',','tempt');
call `usp_split_nr` (nr,',','tempr');

Set @ni=ni;
Set @nb=nb;
Set @nr=nr;
Set @nt=nt;
Set @nd=nd;


SET @sql:=CONCAT("
Select * , null as color from t_doc_file f where id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=1 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@ni=' ' or b.verticalvalues_id in(Select variable from tempi))
) 

and id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=2 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@nb=' ' or b.verticalvalues_id in(Select variable from tempb))
) 

and id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=3 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@nd=' ' or b.verticalvalues_id in(Select variable from tempd))
)

and id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=4 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@nt=' ' or b.verticalvalues_id in(Select variable from tempt))
)
and id in (
				Select a.file_id from t_doc_attachFileMap  a
				join t_doc_attachRolemap b ON a.verticalvalues_id = b.verticalvalues_id
				where b.vertical_id=5 and (",rol_id,"=1 or  b.crole_id = ",croleid," )
				and (@nr=' ' or b.verticalvalues_id in(Select variable from tempr))
) and f.isConfirmed=1 and  
concat(
ifnull(f.name,''), ' ', 
ifnull(f.description,''),' '
,ifnull(f.author,''),' ',
ifnull(f.title,'')
) like '%",globalSearch,"%';");

PREPARE dynamic_statement FROM @sql;
EXECUTE dynamic_statement;
DEALLOCATE PREPARE dynamic_statement;
call usp_doc_parsedData(globalSearch,rol_id,croleid);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_doc_viewFileDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_doc_viewFileDetails`(id1 int(10))
BEGIN

select * from t_doc_file where id = id1 ;
SELECT fm.id,fm.file_id,v.values as doctype FROM portal.t_doc_attachfilemap fm inner join t_doc_verticalvalues v 
on fm.verticalvalues_id=v.id where   file_id=id1 and fm.vertical_id=3;
SELECT fm.id,fm.file_id,v.values as  industry FROM portal.t_doc_attachfilemap fm inner join t_doc_verticalvalues v 
on fm.verticalvalues_id=v.id where   file_id=id1 and fm.vertical_id=1;
SELECT fm.id,fm.file_id,v.values as business FROM portal.t_doc_attachfilemap fm inner join t_doc_verticalvalues v 
on fm.verticalvalues_id=v.id where   file_id=id1 and fm.vertical_id=2;

SELECT fm.id,fm.file_id,v.values as technology FROM portal.t_doc_attachfilemap fm inner join t_doc_verticalvalues v 
on fm.verticalvalues_id=v.id where   file_id=id1 and fm.vertical_id=4;
SELECT fm.id,fm.file_id,v.values as restriction FROM portal.t_doc_attachfilemap fm inner join t_doc_verticalvalues v 
on fm.verticalvalues_id=v.id where   file_id=id1 and fm.vertical_id=5;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ex_addattachmentforExpense` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ex_addattachmentforExpense`(
expenseClaimid int,
filepath varchar(200),
filename varchar(400),
orignalfilename varchar(200),
createdBy int,
lastModifiedBy int
)
BEGIN

INSERT INTO `t_tex_attachment`
(
`expenseClaimeId`,
`filePath`,
`fileName`,
`orignalFileName`,
`uploadDate`,
`createdDate`,
`createdBy`,
`modifiedDate`,
`modifiedBy`)
VALUES
(
expenseClaimid,
filepath,
filename,
orignalfilename,
now(),
now(),
createdBy,
now(),
lastModifiedBy
);
UPDATE `t_tex_expensesubtable`
SET
`anyFile`=filename
WHERE id=expenseClaimid;
call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ex_ApproveandrejectExpense_inr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ex_ApproveandrejectExpense_inr`(expensec int,role int,userid int,status1 int,ides int,remarks varchar(500)
)
BEGIN
declare islimit int;
declare isApprover int(20);
 DECLARE mgid int default 0;
 DECLARE a int default 0;
set @b=(select totalExpense from t_tex_expenseclaime where expenseclaimId=expensec);
set @c=(select ClaimedStatus from t_tex_expenseclaime where expenseclaimId=expensec);
set mgid=(select managerId from t_userdetails where id=userid);
set islimit=(select approveLimit from t_userdetails where  id=mgid);

if @c>0 and role=1 and @b>=islimit 
then
UPDATE `t_tex_expenseclaime`
SET
`ClaimedStatus` =@c+1,
`modifiedBy`=userid
WHERE expenseclaimId=expensec;
end if;
if  role=4 or role=1 
then
UPDATE `t_tex_expenseclaime`
SET
`ClaimedStatus` =@c+1,
`modifiedBy`=userid
WHERE expenseclaimId=expensec;
UPDATE `t_tex_transcation`
SET

`Status` = 1,
`remark` = remarks
WHERE `headerId` =expensec and `approvelId`=userid;
#gdgdggcgc
set isApprover=(select isApproval from t_userdetails where  id=mgid);
set islimit=(select approveLimit from t_userdetails where  id=mgid);
simple_loop: LOOP
set a=a+1;
IF mgid is null or mgid=userid then
set @ides=(select id from t_userdetails where roleid=5 order by id desc limit 1);
insert into t_tex_transcation( headerid, status,approvelId) values(expensec, 0,@ides);
		LEAVE simple_loop;
end if;
if(islimit<@b) and isApprover=1 and mgid!=userid
then
insert into t_tex_transcation( headerid, status,approvelId) values( expensec, 0,mgid);
LEAVE simple_loop;
else

set mgid=(select managerId from t_userdetails where id=mgid);
set isApprover=(select isApproval from t_userdetails where  id=mgid);
set islimit=(select approveLimit from t_userdetails where  id=mgid);
end if;


end LOOP simple_loop ;
#ghhgd
end if;
if role=5 
then
UPDATE `t_tex_expenseclaime`
SET
`ClaimedStatus` =100,
`modifiedBy`=userid
WHERE expenseclaimId=expensec;
UPDATE `t_tex_transcation`
SET

`Status` = 1,
`remark` = remarks
WHERE `headerId` =expensec and `approvelId`=userid and id=ides;
end if;
if status1=0 
then
UPDATE `t_tex_expenseclaime`
SET
`ClaimedStatus` =10,
`modifiedBy`=userid
WHERE expenseclaimId=expensec;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ex_getExpensemaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ex_getExpensemaster`()
BEGIN
SELECT * FROM t_tex_masterdescription where code=1;
SELECT * FROM t_tex_master;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ex_showremark` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ex_showremark`(expenseClid int)
BEGIN
SELECT c.anyFile,u.firstName FROM portal.t_tex_expenseclaime as c inner join t_userdetails as  u on u.id=c.createdBy where expenseclaimId=expenseClid;
SELECT t.remark ,u.firstName FROM portal.t_tex_transcation as t inner join t_userdetails as u on t.approvelId=u.id where Status=1 and headerId=expenseClid;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ex_updateExpenseforClaime_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ex_updateExpenseforClaime_rsandinr`(
intotalExpense int, 
inmodifiedBy int,
ids int
)
BEGIN
Update `t_tex_expenseclaime`
set
`fromdate`=now(),
`toDate`=now(),
`totalExpense`=intotalExpense,
`modifyDate`=now(),
`modifiedBy`=inmodifiedBy
where expenseclaimId=ids;


#select LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_ex_updateMasterforExpense` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_ex_updateMasterforExpense`(code int, 
    des1 varchar(500),des2 int,des3 int,mby int,active tinyint(2), id1 int)
BEGIN
Select count(1) from t_tex_masterdescription where code=code and description=des1 
into @ifExist;
if(@ifExist=0) then

update t_tex_masterdescription set code=code,description=des1,minimumBillableMandetory=des2,
maximumBillableMandetory=des3,modifyDate=now(),modifiedBy=mby,isActive=active
  where id=id1;
   set @flags=1000;   
select @flags as flag;
end if;  

Select @ifExist as flag;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_e_insertExpenseforClaime_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_e_insertExpenseforClaime_rsandinr`(
totalExpense int, 
createdBy int,
modifiedBy int
)
BEGIN
INSERT INTO `t_tex_expenseclaime`
(
`fromdate`,
`toDate`,
`totalExpense`,
`Submitted`,
`ClaimedStatus`,
`createdDate`,
`createdBy`,
`modifyDate`,
`modifiedBy`
)
VALUES
(
now(),
now(),
totalExpense,
0,
0,
now(),
createdBy,
now(),
modifiedBy
);
#select LAST_INSERT_ID();
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllClientsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getAllClientsById`(in inClientId int, in inRoleId int,
in inRetailerId int,in inIsActive int)
BEGIN
select * from t_location;
select * from t_userdetails where roleId in (4,1) and retailerId=inRetailerId;

If inClientId is not Null and inRoleId is not null and inRetailerId is not null THEN

SELECT c.*,t.location as locName,concat(u.firstName,' ', u.lastName)as leadName FROM t_clients  c
 left join t_location t on c.location=t.id
left join t_userdetails u on c.clientAccountLead=u.id
where c.isActive=inIsActive and c.retailerId = inRetailerId
and (inClientId = 0 or c.id = inClientId);

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllCustomRoleVerticalValues` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getAllCustomRoleVerticalValues`(in inUserId int, 
in inRoleId int,
in inRetailerId int)
BEGIN
SELECT cr.id,rm.vertical_id, rm.verticalvalues_id FROM t_doc_attachrolemap rm
join t_doc_customrole cr on cr.id=rm.crole_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllDepartmentById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getAllDepartmentById`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
If inUserId is not Null and inRoleId is not null and inRetailerId is not null THEN
Select * from t_mastersdescription t inner join t_master m on t.code=m.code 
where m.tablename ='Department'and t.retailerId=inRetailerId;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllLevelById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getAllLevelById`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
If inUserId is not Null and inRoleId is not null and inRetailerId is not null THEN
Select * from t_mastersdescription t inner join t_master m on t.code=m.code 
where m.tablename ='Level' and t.retailerId=inRetailerId;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllProjects` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getAllProjects`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
If inUserId is not Null and inRoleId is not null and inRetailerId is not null THEN
Select 
    u.`id`,
    u.`projectTitle`,
    u.`pcode`,
    u.`ptype`,
   u.`description`,
    u.`plannedStartDate`
, u.`plannedEndDate`
   , u.`actualStartDate`,
    u.`actualEndDate`,
    u.`pstatus`,
    u.`pcomplexity`,
    u.`plocation`,
    u.`commercialHead`,
    u.`accountHead`,
    u.`manager`,
    u.`teamLead`
from
    t_projectdetails u
        inner join
    t_retailer l ON u.retailerId = l.id
        
where
    
     u.retailerId=inRetailerId and u.isActive=1;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getAllRoles`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
If inUserId is not Null and inRoleId is not null and inRetailerId is not null THEN
Select * from t_loginroles;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllUsersById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getAllUsersById`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
If inUserId is not Null and inRoleId is not null and inRetailerId is not null THEN
Select 
    u.`id`,
    concat(u.`firstName`, ' ', u.`lastName`) as Name,
    u.`userEmail`,
    u.`contactNumber`,
    l.roleName,
    concat(`m`.`firstName`, ' ', `m`.`lastName`) as managerName,
    u.`isActive`,
    u.`roleId`
 ,
    u.`firstName`,
   u.`lastName`,
    u.`retailerId`
, u.`managerId`
, u.`isBillable`
   , u.`billingAmount`,
u.`isApproval`,
u.`approveLimit`,
    u.`defaultModuleId`,
    u.`isValidated`,
       u.`doj`,
    u.`dob`,
   u.`doc`,
   u.`ecode`,
   u.`designation`,
   u.`level`,
   u.`modules`,
   u.`userId`,
   u.`rtype`
from
    t_userdetails u
        inner join
    t_loginroles l ON u.roleId = l.id
        left join
    t_userdetails m ON u.managerId = m.id
where
    u.retailerId = inRetailerId
        and (inUserId = 0 or u.id = inUserId);



Select 
    u.`id`,
    concat(u.`firstName`, ' ', u.`lastName`) as Name,
    u.`userEmail`,
    u.`contactNumber`,
    l.roleName,
    concat(`m`.`firstName`, ' ', `m`.`lastName`) as managerName,
    u.`isActive`,
    u.`roleId`
 ,
    u.`firstName`,
   u.`lastName`,
    u.`retailerId`
, u.`managerId`
, u.`isBillable`
   , u.`billingAmount`,
u.`isApproval`,
u.`approveLimit`,
    u.`defaultModuleId`,
    u.`isValidated`,
       u.`doj`,
    u.`dob`,
   u.`doc`,
   u.`ecode`,
   u.`designation`,
   u.`level`,   
   u.`userId`,
   u.`rtype`
from
    t_userdetails u
        inner join
    t_loginroles l ON u.roleId = l.id
        left join
    t_userdetails m ON u.managerId = m.id where u.retailerId=inRetailerId;

select * from t_usermodulemapping where userId=inUserId;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getAllWbs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getAllWbs`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
If inUserId is not Null and inRoleId is not null and inRetailerId is not null THEN

select *from t_wbs as t
 left outer join t_projectdetails as p on t.projectId=p.id
left outer join t_location as loc on t.WBSLocation=loc.id
left outer join t_userdetails as us on t.WBSOwner=us.id
where t.WBSStatus=1 and t.retailerId=inRetailerId;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getExpenseforBillable_rs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getExpenseforBillable_rs`(ids int)
BEGIN
SELECT * FROM t_tex_masterdescription where id=ids;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getModuleByRetailerId` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getModuleByRetailerId`(in inUserId int
,in inRoleId int, in inRetailerId int)
BEGIN
if inUserId is not null and inRoleId is not null and inRetailerId is not null then

if inRoleId=1 THEN

Select pm.id,pm.Name from t_retailer r 
inner join t_retailermodulemapping m on r.id=m.retailerId
inner join t_portalmodules pm on pm.id=m.moduleId where m.retailerId=inRetailerId;

else


/*Select pm.Name from t_retailer r 
inner join t_usermodulemapping m on r.id=m.retailerId
inner join t_portalmodules pm on pm.id=m.moduleId where m.retailerId=inUserId;*/
Select pm.id,pm.Name from t_retailer r 
inner join t_usermodulemapping m on r.id=m.userId
inner join t_portalmodules pm on pm.id=m.moduleId where m.userId=inUserId;
end if;

end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getModules` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getModules`(in inUserId int
,in inRoleId int, in inRetailerId int)
BEGIN
if inUserId is not null and inRoleId is not null and inRetailerId is not null then

if inRoleId=1 THEN

Select pm.id,pm.Name from t_retailer r 
inner join t_retailermodulemapping m on r.id=m.retailerId
inner join t_portalmodules pm on pm.id=m.moduleId where m.retailerId=inRetailerId;

else


/*Select pm.Name from t_retailer r 
inner join t_usermodulemapping m on r.id=m.retailerId
inner join t_portalmodules pm on pm.id=m.moduleId where m.retailerId=inUserId;*/
Select pm.id,pm.Name from t_retailer r 
inner join t_usermodulemapping m on r.id=m.userId
inner join t_portalmodules pm on pm.id=m.moduleId where m.userId=inUserId;
end if;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getothermaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getothermaster`()
BEGIN
SELECT code,tablename FROM t_master where code=4 or code=6 or code=7 or code =8 ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_getUserDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_getUserDetails`(in inUserId int
,in inRoleId int, in inRetailerId int)
BEGIN
if inUserId is not null and inRoleId is not null and inRetailerId is not null then

if inRoleId=1 THEN

select concat(ud.firstName," ",ud.lastName) as name,
group_concat(pm.Name) as module,ud.isValidated as isValidate
from t_usermodulemapping mm join
t_portalmodules pm 
on pm.id=mm.moduleId
join
t_userdetails ud
on ud.id=mm.userId
where ud.retailerId=inRetailerId
group by mm.userId ;

select t3.name,t3.totalUser,t4.activeUser from(select t1.name,t2.totalUser from ( select Name from t_retailermodulemapping rm join t_portalmodules pm
 on rm.moduleId=pm.id
 where rm.retailerId=inRetailerId
 group by pm.name) t1
 left join
(SELECT pm.name,group_concat(ud.id) as totalUser FROM portal.t_usermodulemapping um join t_portalmodules pm
 on um.moduleId=pm.id
 join t_userdetails ud
 on ud.id=um.userId
 where ud.retailerId=inRetailerId 
 group by pm.name) t2 
 on t1.name=t2.name
 )t3
 join
 (select t1.name,t2.activeUser from ( select Name from t_retailermodulemapping rm join t_portalmodules pm
 on rm.moduleId=pm.id
 where rm.retailerId=inRetailerId
 group by pm.name) t1
 left join
(SELECT pm.name,group_concat(ud.id) as activeUser FROM portal.t_usermodulemapping um join t_portalmodules pm
 on um.moduleId=pm.id
 join t_userdetails ud
 on ud.id=um.userId
 where ud.retailerId=inRetailerId and ud.isValidated=1
 group by pm.name) t2 
 on t1.name=t2.name
 )t4
 on t3.name=t4.name;

else



Select pm.id,pm.Name from t_retailer r 
inner join t_usermodulemapping m on r.id=m.userId
inner join t_portalmodules pm on pm.id=m.moduleId where m.userId=inUserId;
end if;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertExpenseforClaime_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertExpenseforClaime_rsandinr`(expenseTypeId int,
tripassignment int,
fromdate datetime,
todate datetime,
currencyId int,
totalExpense int, 
timeSheetId int,
claimStatus int,
createdBy int,
modifiedBy int,
expId int
)
BEGIN
INSERT INTO `t_tex_expenseclaime`
(
`expenseid`,
`tripassignmentId`,
`fromdate`,
`toDate`,
`currencyId`,
`totalExpense`,
`timeSheetId`,
`Submitted`,
`createdDate`,
`createdBy`,
`modifyDate`,
`modifiedBy`,
`expId`)
VALUES
(
expenseTypeId,
tripassignment,
fromdate,
toDate, 
currencyId,
totalExpense,
timeSheetId,
0,
now(),
createdBy,
now(),
modifiedBy,
expId
);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertExpenseforFood_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertExpenseforFood_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),

reason varchar(500),
currencyId int,
totalExpense int,

createdBy1 int,

modifiedBy int
)
BEGIN
INSERT INTO `t_tex_foodexpense`
(
`expenseId`,
`reason`)
VALUES
(
expenseType,
reason
);
set @expid= (SELECT id FROM t_tex_foodexpense ORDER BY id DESC limit 1);
#set @cre= (SELECT createdBy FROM t_tex_expenseclaime ORDER BY expenseclaimId DESC limit 1);
#set @total= (SELECT totalExpense FROM t_tex_expenseclaime ORDER BY expenseclaimId DESC limit 1);
#set @sub= (SELECT Submitted FROM t_tex_expenseclaime ORDER BY expenseclaimId DESC limit 1);
set @expenseClaimid1= (SELECT expenseclaimId FROM t_tex_expenseclaime 
 where createdBy=createdBy1 and Submitted!=1 ORDER BY expenseclaimId DESC limit 1);
if @expenseClaimid1 is null 
then
call `usp_e_insertExpenseforClaime_rsandinr`(totalExpense,createdBy1,modifiedBy);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,LAST_INSERT_ID(),@expid);
else
set @expenseClaimid= (SELECT expenseclaimId FROM t_tex_expenseclaime  where createdBy=createdBy1 ORDER BY expenseclaimId DESC limit 1);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,@expenseClaimid,@expid);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,@expenseClaimid); 
end if;




#call`usp_insertExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,LAST_INSERT_ID());
#call Ex_getExpenseType(createdBy1);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertExpenseforOther_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertExpenseforOther_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),

reason varchar(500),
currencyId int,
totalExpense int,

createdBy1 int,

modifiedBy int
)
BEGIN
INSERT INTO `t_tex_otherexpense`
(
`expenseId`,
`reason`)
VALUES
(
expenseType,
reason
);
set @expid= (SELECT id FROM t_tex_otherexpense ORDER BY id DESC limit 1);
set @expenseClaimid1= (SELECT expenseclaimId FROM t_tex_expenseclaime 
 where createdBy=createdBy1 and Submitted!=1 ORDER BY expenseclaimId DESC limit 1);
if @expenseClaimid1 is null
then
call `usp_e_insertExpenseforClaime_rsandinr`(totalExpense,createdBy1,modifiedBy);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,LAST_INSERT_ID(),@expid);
else
set @expenseClaimid= (SELECT expenseclaimId FROM t_tex_expenseclaime  where createdBy=createdBy1 ORDER BY expenseclaimId DESC limit 1);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,@expenseClaimid,@expid);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,@expenseClaimid); 
end if;

#call`usp_insertExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,LAST_INSERT_ID());
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertExpenseforPerDiem_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertExpenseforPerDiem_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
hotelName varchar(200), 
reason varchar(500),
ifnotthenother varchar(200),
ratePerDay int,
totalDay int,
currencyId int,
totalExpense int,

createdBy1 int,

modifiedBy int
)
BEGIN
INSERT INTO `t_tex_perdiemexpense`
(
`expenseId`,
`hotalName`,
`reason`,
`perDiemRate`,
`ifNotThenOther`,
`totalDays`)
VALUES
(
expenseType,
hotelName,
reason,
ratePerDay,
ifnotthenother,
totalDay
);
set @expid= (SELECT id FROM t_tex_perdiemexpense ORDER BY id DESC limit 1);
set @expenseClaimid1= (SELECT expenseclaimId FROM t_tex_expenseclaime 
 where createdBy=createdBy1 and Submitted!=1 ORDER BY expenseclaimId DESC limit 1);
if @expenseClaimid1 is null
then
call `usp_e_insertExpenseforClaime_rsandinr`(totalExpense,createdBy1,modifiedBy);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,LAST_INSERT_ID(),@expid);
else
set @expenseClaimid= (SELECT expenseclaimId FROM t_tex_expenseclaime  where createdBy=createdBy1 ORDER BY expenseclaimId DESC limit 1);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,@expenseClaimid,@expid);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,@expenseClaimid); 
end if;

#call`usp_insertExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,LAST_INSERT_ID());
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertExpenseforPhone_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertExpenseforPhone_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),

reason varchar(500),
currencyId int,
totalExpense int,

createdBy1 int,

modifiedBy int
)
BEGIN
INSERT INTO `t_tex_phoneexpense`
(
`expenseId`,
`reason`)
VALUES
(
expenseType,
reason
);
set @expid= (SELECT id FROM t_tex_phoneexpense ORDER BY id DESC limit 1);
set @expenseClaimid1= (SELECT expenseclaimId FROM t_tex_expenseclaime 
 where createdBy=createdBy1 and Submitted!=1 ORDER BY expenseclaimId DESC limit 1);
if @expenseClaimid1 is null
then
call `usp_e_insertExpenseforClaime_rsandinr`(totalExpense,createdBy1,modifiedBy);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,LAST_INSERT_ID(),@expid);
else
set @expenseClaimid= (SELECT expenseclaimId FROM t_tex_expenseclaime  where createdBy=createdBy1 ORDER BY expenseclaimId DESC limit 1);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,@expenseClaimid,@expid);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,@expenseClaimid); 
end if;

#call`usp_insertExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,LAST_INSERT_ID());
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertExpenseforRSD_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertExpenseforRSD_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
typeOfVehicle varchar(200), 
reason varchar(500),
ifnotthenother varchar(200),
ratePerKm int,
totalKm int,
currencyId int,
totalExpense int,

createdBy1 int,

modifiedBy int
)
BEGIN

INSERT INTO `t_tex_rsdexpense`
(
`expenseId`,
`typeOfVehicle`,
`reason`,
`perkmRate`,
`ifNotThenOther`,
`totalKmTravel`)
VALUES
(
expenseType,
typeOfVehicle,
reason,
ratePerKm,
ifnotthenother,
totalKm
);
set @expid= (SELECT id FROM t_tex_rsdexpense ORDER BY id DESC limit 1);
set @expenseClaimid1= (SELECT expenseclaimId FROM t_tex_expenseclaime 
 where createdBy=createdBy1 and Submitted!=1 ORDER BY expenseclaimId DESC limit 1);
if @expenseClaimid1 is null
then
call `usp_e_insertExpenseforClaime_rsandinr`(totalExpense,createdBy1,modifiedBy);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,LAST_INSERT_ID(),@expid);
else
set @expenseClaimid= (SELECT expenseclaimId FROM t_tex_expenseclaime  where createdBy=createdBy1 ORDER BY expenseclaimId DESC limit 1);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,@expenseClaimid,@expid);
SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,@expenseClaimid); 
end if;

#call`usp_insertExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,LAST_INSERT_ID());
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertExpenseforsubTable_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertExpenseforsubTable_rsandinr`(expenseTypeId int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
currencyId int,
totalExpense int, 
expenseclaimId int,
expId int
)
BEGIN
INSERT INTO `t_tex_expensesubtable`
(
`expId`,
`expenseType`,
`currencyId`,
`totalExpense`,
`fromDate`,
`toDate`,
`expenseclaimId`,
`tripAssignment`
)
VALUES
(
expId,
expenseTypeId,
currencyId,
totalExpense,
fromdate,
toDate,
expenseclaimId, 
tripassignment

);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertExpenseforTravel_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertExpenseforTravel_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
travelType varchar(200), 
reason varchar(500),
ifnotthenother varchar(200),
ratePerDay int,
totalDay int,
currencyId int,
totalExpense int,

createdBy1 int,

modifiedBy int
)
BEGIN

INSERT INTO `t_tex_travelexpense`
(
`expenseid`,
`travelType`,
`reason`,
`ifNotThenOther`,
`ratePerDay`,
`totalDay`)
VALUES
(
expenseType,
travelType,
reason,
ifnotthenother,
ratePerDay,
totalDay
);
set @expid= (SELECT id FROM t_tex_travelexpense ORDER BY id DESC limit 1);
set @expenseClaimid1= (SELECT expenseclaimId FROM t_tex_expenseclaime 
 where createdBy=createdBy1 and Submitted!=1 ORDER BY expenseclaimId DESC limit 1);
if @expenseClaimid1 is null
then
call `usp_e_insertExpenseforClaime_rsandinr`(totalExpense,createdBy1,modifiedBy);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,LAST_INSERT_ID(),@expid);
else
set @expenseClaimid= (SELECT expenseclaimId FROM t_tex_expenseclaime  where createdBy=createdBy1 ORDER BY expenseclaimId DESC limit 1);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,@expenseClaimid,@expid);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,@expenseClaimid); 
end if;

#call`usp_insertExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,LAST_INSERT_ID());
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insertHotelExpense_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insertHotelExpense_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
hotelName varchar(200), 
reason varchar(500),
ifnotthenother varchar(200),
ratePerDay int,
totalDay int,
currencyId int,
totalExpense int,

createdBy1 int,

modifiedBy int
)
BEGIN
#DECLARE expenseClaimid int ;
DECLARE total int default 0;
#DECLARE expid int default 0;
DECLARE totalExp int default 0;
#declare cre int default 0;
#declare sub int default 0;

INSERT INTO `t_tex_hotelexpense`
(
`expenseid`,
`hotelName`,
`reason`,
`ifNotThenOther`,
`ratePerDay`,
`totalDay`
)
VALUES
(
expenseType,
hotelName,
reason,
ifnotthenother,
ratePerDay,
totalDay
);
set @expid= (SELECT id FROM t_tex_hotelexpense ORDER BY id DESC limit 1);
#set @cre= (SELECT createdBy FROM t_tex_expenseclaime ORDER BY expenseclaimId DESC limit 1);
set @expenseClaimid1= (SELECT expenseclaimId FROM t_tex_expenseclaime  where createdBy=createdBy1 and Submitted!=1 ORDER BY expenseclaimId DESC limit 1);

set @total= (SELECT totalExpense FROM t_tex_expenseclaime ORDER BY expenseclaimId DESC limit 1);
#set @sub= (SELECT Submitted FROM t_tex_expenseclaime ORDER BY expenseclaimId DESC limit 1);
if @expenseClaimid1 is null 
then
call `usp_e_insertExpenseforClaime_rsandinr`(totalExpense,createdBy1,modifiedBy);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,LAST_INSERT_ID(),@expid);
#end if;
else
set @expenseClaimid= (SELECT expenseclaimId FROM t_tex_expenseclaime  where createdBy=createdBy1 ORDER BY expenseclaimId DESC limit 1);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,@expenseClaimid,@expid);
 select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid into @totalExp;
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,@expenseClaimid); 
end if;

/* if @cre!=createdBy
then
call `usp_e_insertExpenseforClaime_rsandinr`(totalExpense,createdBy,modifiedBy);
call `usp_insertExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,LAST_INSERT_ID(),@expid);
end if;*/
#call`usp_insertExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,LAST_INSERT_ID());
#call Ex_getExpenseType(createdBy);
call `Ex_newgetExpenseType`(createdBy1);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insMaster`(code1 int,
dec1 varchar(500),`type` varchar(100),rate double ,cby int,mby int,in inretid int)
BEGIN

Select count(1) from t_mastersdescription where code=code1 and description1=dec1 
and retailerId=inretid into @ifExist;
if(@ifExist=0) then 
INSERT INTO  `t_mastersdescription`
(
`code`,
`description1`,
`createdDate`,
`createdBy`,
`lastModifiedDate`,
`lastModifiedBy`,
`isActive`,
`currencyType`,
`currencyRate`,retailerId
)
VALUES
(code1,
dec1,
now(),
cby,
now(),
mby,
1,
`type`,
rate,
inretid
);

end if;

Select @ifExist as flag;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_insMasterforExpense` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_insMasterforExpense`(code1 int,dec1 varchar(500),dec2 int,dec3 int,cby int,mby int)
BEGIN
Select count(1) from t_tex_masterdescription where code=code1 and description=dec1 
into @ifExist;
if(@ifExist=0) then
INSERT INTO  `t_tex_masterdescription`
(
`code`,
`createdDate`,
`createdBy`,
`modifyDate`,
`modifiedBy`,
`isActive`,
`description`,
`minimumBillableMandetory`,
`maximumBillableMandetory`)
VALUES
(code1,
now(),
cby,
now(),
mby,
1,
dec1,
dec2,
dec3
);
end if;

Select @ifExist as flag;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_mailServerConfigure` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_mailServerConfigure`(retid int,
domain varchar(100),
smtpuname varchar(200),
smtppass varchar(200),
smtpport int)
BEGIN
declare smtpmail varchar(200);
set smtpmail=concat(smtpuname,"@",domain,".com");

select count(1) from t_mailserverinfo where retailerId=retid into @temp;
if @temp>0 then
UPDATE  `t_mailserverinfo`
SET
`domainName` =domain,
`domainUserName` = smtpuname,
`domainPassword` = smtppass,
`port` = smtpport,
`smtpMail`=smtpmail
WHERE `retailerId` = retid;
else

INSERT INTO `t_mailserverinfo`
(
`retailerId`,
`domainName`,
`domainUserName`,
`domainPassword`,
`port`,
`smtpMail`)
VALUES
(
retid,
domain,
smtpuname,
smtppass,
smtpport,
smtpmail);
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_mailServerInfo` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_mailServerInfo`(
retid int)
BEGIN
select count(1) from t_mailserverinfo where retailerId=retid into @ifexist;
if @ifexist=0 then 
select 0 as  id ,0 as domainName,0 as domainUserName,0 as domainPassword,
0 as port,0 as smtpMail, 0 as Domain   ;

else

select * from t_mailserverinfo where retailerId=retid ;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_masterGetStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_masterGetStatus`(id1 int,retid int)
BEGIN
SELECT * FROM  t_mastersdescription
 as d inner join t_master as t
 on d.code=t.code where  t.code=id1 and (d.flag=1 or d.retailerid=retid) ;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_mastersettingdata` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_mastersettingdata`()
BEGIN
SELECT code,tablename FROM t_master where code=1 or code=2 or code=3 or code =5 ;
#SELECT code,tablename FROM t_master where code=4 or code=6 or code=7 or code =8 ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_master_profile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_master_profile`(retid int)
BEGIN
select * from t_retailer where id=retid;
select * from t_retailersmtp where retailerId=retid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_master_updateprofile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_master_updateprofile`(
uid int,roleid int ,retid int, cname varchar(100),
fname varchar(100),lname varchar(100),cno varchar(100),
email varchar(200),pass varchar(200))
BEGIN
UPDATE `t_userdetails`
SET
`firstName` = fname,
`lastName` = lname,
`userEmail` = email,
`userPassword` =pass,
`lastModifiedDate` = now(),
`contactNumber` = cno
WHERE `id` = uid;

UPDATE `t_retailer`
SET
`password` = pass,
`companyName` = cname,
`firstName` =fname,
`lastName` =lname,
`contactNo` = cno
WHERE `emailId` = email;
End ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_projectStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_projectStatus`(st int,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
if st=1 then
select *from t_projectdetails where isActive=1 and retailerId=inRetailerId;

else 
select *from t_projectdetails where isActive=0  and retailerId=inRetailerId;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_projectWbs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_projectWbs`(pid int,
in inUserId int, in inRoleId int,in inRetailerId int)
BEGIN

select a.id,a.projectTitle,a.pcode,a.pcomplexity,a.plocation
,loc.id as locid,loc.location  from  t_projectdetails a
inner join t_location as loc on a.plocation=loc.id  where a.id=pid;

select *from t_wbs as t
left outer join t_location as loc on t.WBSLocation=loc.id
left outer join t_userdetails as us on t.WBSOwner=us.id

 where projectId=pid and t.retailerId=inRetailerId;

select *from t_location;

select id,concat(firstName," ",lastName) as name
 from t_userdetails where retailerId=inRetailerId;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_recoverPassword` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_recoverPassword`(inEmailid varchar(100),inPassword varchar(100))
BEGIN

DECLARE `_rollback` BOOL DEFAULT 0;
DECLARE Exit HANDLER FOR SQLEXCEPTION SET `_rollback` = 1;
Set @userId=-1;
START TRANSACTION;

if inEmailid is not null then 

Select id from t_userdetails where userEmail=inEmailid into @userId;
if @userid>0 then 
update t_userdetails set userPassword=inPassword where userEmail=inEmailid;
Set @userId=1;
else
Set @userId=4;
end if;
end if;
Select @userId as flag;
if @userId=1 then 

Select * from t_userdetails where userEmail=inEmailid;
end if;
 IF `_rollback` THEN
        ROLLBACK;
    ELSE
        COMMIT;
    END IF;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_reSubmitrejectExpense` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_reSubmitrejectExpense`(expensec int
)
BEGIN
set @c=(select ClaimedStatus from t_tex_expenseclaime where expenseclaimId=expensec);

if @c=10  
then
UPDATE `t_tex_expenseclaime`
SET
`Submitted` =0,
`ClaimedStatus`=0
WHERE expenseclaimId=expensec;

UPDATE `t_tex_transcation`
SET

`Status` = 100
#`remark` = ,
WHERE `headerId` =expensec;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_retailerRegistration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = '' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_retailerRegistration`(
in inCompanyName varchar(200),in inEmailId varchar(200),
in inPassword varchar(200),in inFirstName varchar(200),
in inLastName varchar(200),in inContactNo varchar(200)
,in inChoosedModule varchar(500)
)
BEGIN
/*
DECLARE EXIT HANDLER FOR SQLEXCEPTION    
BEGIN
Select -1 as flag;
rollback;
END;
Set autocommit=0;
Start transaction;
*/
Select count(1) from t_retailer where emailId=inEmailId into @ifExist;

Select @ifExist as flag;
if @ifExist =0 then
INSERT INTO `t_retailer`
(
`companyName`,
`emailId`,
`password`,
`firstName`,
`lastName`,
`contactNo`,
`createdDate`)
VALUES
(inCompanyName,inEmailId,inPassword,inFirstName,inLastName,inContactNo,Now());

select id from t_retailer where emailId=inEmailId into @retailerId;

call usp_split_nr(inChoosedModule,',','tempModules');
INSERT INTO `t_retailermodulemapping`
(
`retailerId`,
`moduleId`)
Select @retailerId,p.id from t_portalmodules p 
inner join tempModules t on trim(p.Name)=trim(t.variable) ;

INSERT INTO `t_userdetails`
(
`firstName`,
`lastName`,
`userEmail`,
`contactNumber`,
`userPassword`,
`roleId`,
`retailerId`,
`createdDate`,
`lastModifiedDate`,
`isClient`,
`clientID`,
`isValidated`,
`isActive`)
VALUES
(inFirstName,inLastName,inEmailId,inContactNo,inPassword,1,@retailerId
,Now(),Now(),0,0,0,1);
#drop table if exists tempModules;
end if;
#commit;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_selectExpenseById_rs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_selectExpenseById_rs`(expenseid int)
BEGIN
SELECT * FROM t_tex_hotelexpense where id=expenseid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_selectExpenseMasterByCode` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_selectExpenseMasterByCode`(expensecode int)
BEGIN
SELECT * FROM portal.t_tex_masterdescription where code=expensecode;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_selectExpense_rs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_selectExpense_rs`(expenseTypeID int,expId int,expensecId int)
BEGIN
if expenseTypeID=1
 then
SELECT ex.expenseclaimId,ex.anyFile,sub.fromdate,sub.toDate,
sub.currencyId,sub.expId,sub.tripAssignment,sub.totalExpense,
sub.anyFile,ex.ClaimedStatus,hd.id,hd.expenseid,
hd.hotelName,hd.reason,hd.ifNotThenOther,hd.ratePerDay,hd.totalDay
 FROM t_tex_hotelexpense as hd
 inner join t_tex_expensesubtable as sub on sub.expId=hd.id inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId
where ex.expenseclaimId=expensecId and sub.expenseType=1
and hd.id=expId;
SELECT * FROM t_tex_masterdescription where id=1;
end if;
 if expenseTypeID=2
then
SELECT ex.expenseclaimId,sub.fromdate,sub.toDate,
sub.currencyId,sub.expId,sub.tripassignment,sub.totalExpense,
sub.anyFile,ex.ClaimedStatus,sub.expId,hd.id,hd.expenseid,
hd.travelType,hd.reason,hd.ifNotThenOther,hd.ratePerDay,hd.totalDay
FROM t_tex_travelexpense as hd
 inner join t_tex_expensesubtable as sub on sub.expId=hd.id inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId
where ex.expenseclaimId=expensecId and sub.expenseType=2
and hd.id=expId;
SELECT * FROM t_tex_masterdescription where id=2;
end if;
if expenseTypeID=3
then
SELECT ex.expenseclaimId,sub.anyFile,sub.fromdate,sub.toDate,
sub.currencyId,sub.expId,sub.tripassignment,sub.totalExpense,
ex.ClaimedStatus,sub.expId,hd.id,hd.expenseId,
hd.reason
FROM t_tex_foodexpense as hd
inner join t_tex_expensesubtable as sub on sub.expId=hd.id inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId
where ex.expenseclaimId=expensecId and sub.expenseType=3
and hd.id=expId ;
SELECT * FROM t_tex_masterdescription where id=3;
end if;
 if expenseTypeID=4
then
SELECT ex.expenseclaimId,sub.anyFile,sub.fromdate,sub.toDate,
sub.currencyId,sub.expId,sub.tripassignment,sub.totalExpense,
ex.ClaimedStatus,sub.expId,hd.id,hd.expenseId,
hd.reason
 FROM t_tex_phoneexpense as hd
 inner join t_tex_expensesubtable as sub on sub.expId=hd.id inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId
where ex.expenseclaimId=expensecId and sub.expenseType=4
and hd.id=expId;
SELECT * FROM t_tex_masterdescription where id=4;
end if;
 if expenseTypeID=5
then
SELECT ex.expenseclaimId,sub.anyFile,sub.fromdate,sub.toDate,
sub.currencyId,sub.expId,sub.tripassignment,sub.totalExpense,
ex.ClaimedStatus,sub.expId,hd.id,hd.expenseId,
hd.typeOfVehicle,hd.reason,hd.ifNotThenOther,hd.perkmRate,hd.totalkmTravel
 FROM t_tex_rsdexpense as hd
 inner join t_tex_expensesubtable as sub on sub.expId=hd.id inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId
where ex.expenseclaimId=expensecId and sub.expenseType=5
and hd.id=expId;
SELECT * FROM t_tex_masterdescription where id=5;
end if;
 if expenseTypeID=6 
then
SELECT ex.expenseclaimId,sub.anyFile,sub.fromdate,sub.toDate,
sub.currencyId,sub.expId,sub.tripassignment,sub.totalExpense,
ex.ClaimedStatus,sub.expId,hd.id,hd.expenseId,
hd.hotalName,hd.reason,hd.ifNotThenOther,hd.perDiemRate,hd.totalDays
 FROM t_tex_perdiemExpense as hd
 inner join t_tex_expensesubtable as sub on sub.expId=hd.id inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId
where ex.expenseclaimId=expensecId and sub.expenseType=6
and hd.id=expId;
SELECT * FROM t_tex_masterdescription where id=6;
end if;

 if expenseTypeID=7
then 
SELECT ex.expenseclaimId,sub.fromdate,sub.toDate,
sub.currencyId,sub.expId,sub.tripAssignment,sub.totalExpense,
ex.ClaimedStatus,sub.expId,hd.id,hd.expenseId,
hd.reason
 FROM t_tex_otherexpense as hd
inner join t_tex_expensesubtable as sub on sub.expId=hd.id inner join t_tex_expenseclaime as ex on ex.expenseclaimId=sub.expenseclaimId
where ex.expenseclaimId=expensecId and sub.expenseType=7
and hd.id=expId;
SELECT * FROM t_tex_masterdescription where id=7;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_selectmasters` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_selectmasters`(id1 int)
BEGIN
SELECT * FROM  t_mastersdescription where id=id1;
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
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_split_nr`(IN toSplit text, IN target char(255),in tableName varchar(255) )
BEGIN
	
	SET @tableName = tableName;
	SET @fieldName = 'variable';
 
	
	SET @sql := CONCAT('DROP TABLE IF EXISTS ', @tableName);
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
 
	
	SET @sql := CONCAT('CREATE TEMPORARY TABLE ', @tableName, '(Id int auto_increment,', @fieldName, ' VARCHAR(1000),primary key(Id))');
	PREPARE stmt FROM @sql;
	EXECUTE stmt;
	DEALLOCATE PREPARE stmt;
 
	
	SET @vars := toSplit;
	SET @vars := CONCAT("('", REPLACE(@vars, target, "'),('"), "')");
 
	
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
/*!50003 DROP PROCEDURE IF EXISTS `usp_submitAssignment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_submitAssignment`(flag int(11),
assignmentid int(11),
procod int(11),
wbs int(11),
user varchar(45),
status varchar(45),
asdate varchar(45),
aedate varchar(45),
retailerid int)
BEGIN
IF flag=0
then
INSERT INTO t_assignment
VALUES(
0,
procod,
wbs,
retailerid,
status,
asdate,
aedate);
set @lid=LAST_INSERT_ID();

call usp_split_nr(user,',','temp');
insert into t_mapUserAssig (assId,userId) select @lid,variable from temp;

else 
if flag=1
then
UPDATE t_assignment
SET
ProjectId = procod,
WBSID = wbs,
retailerId = retailerid,
isActive = status,
AssignmentDate = asdate,
AssignmentEndDate = aedate
WHERE id = assignmentid;

DELETE  FROM t_mapUserAssig
WHERE assId=assignmentid;
call usp_split_nr(user,',','temp');
insert into t_mapUserAssig (assId,userId) select assignmentId,variable from temp;
end if;
end if;
drop table temp;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_submitExpense_inr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_submitExpense_inr`(expenseClid int,comments varchar(500))
BEGIN
declare islimit int;
declare isApprover int(20);
 DECLARE mgid int default 0;
 DECLARE a int default 0;
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=expenseClid);
set @userId=(select createdBy from t_tex_expenseclaime where expenseclaimId=expenseClid);
set mgid=(select managerId from t_userdetails where id=@userId);

UPDATE `t_tex_expenseclaime`
SET
`Submitted` =1,
`anyFile`=comments,
`totalExpense`=@totalExp
WHERE expenseclaimId=expenseClid;
set isApprover=(select isApproval from t_userdetails where  id=mgid);
set islimit=(select approveLimit from t_userdetails where  id=mgid);
 simple_loop: LOOP
set a=a+1;
IF mgid is null or mgid=0 or isApprover!=1 or mgid=@userId
 then
set @ides=(select id from t_userdetails where roleid=5 order by id desc limit 1);
insert into t_tex_transcation( headerid, status,approvelId) values( expenseClid, 0,@ides);
		LEAVE simple_loop;
end if;
if(islimit<@totalExp) and isApprover=1 and mgid!=@userId
then
insert into t_tex_transcation( headerid, status,approvelId) values( expenseClid, 0,mgid);
LEAVE simple_loop;
else

set mgid=(select managerId from t_userdetails where id=mgid);
set isApprover=(select isApproval from t_userdetails where  id=mgid);
set islimit=(select approveLimit from t_userdetails where  id=mgid);
end if;


end LOOP simple_loop ;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_te_holidaydetailsById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_te_holidaydetailsById`(in inUserId int, in inRoleId int,
in inRetailerId int,h_id int)
BEGIN
select * from t_holiday where id=h_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_te_holidaydetails_rs` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_te_holidaydetails_rs`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
select * from t_holiday order by id desc;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_te_updateholidayById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_te_updateholidayById`(in userId int,in roleId int,in retailerId int,
in h_id int,in hname varchar(50),in hdate varchar(50))
BEGIN
if h_id=0 then
Select count(1) from t_holiday where holidayName=hname into @ifExist;
if(@ifExist=0 ) then 
insert into t_holiday (holidayName,holidayDate) values (hname,hdate);
select 1 as flag;
else
select 2 as flag;
end if;
else 
update t_holiday set holidayName=hname,holidayDate=hdate where id=h_id;
select 3 as flag;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_timesheet_checkSchedule` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_timesheet_checkSchedule`(in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
Select count(1) from t_timesheet_workschedule where `retailerId`=inRetailerId into @ifExist;
if (@ifExist=0 ) then 
select 0 as flag;
else 
select schedule,startDate from t_timesheet_workschedule where `retailerId`=inRetailerId;
select 1 as flag;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_timesheet_schedule` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_timesheet_schedule`(in inUserId int, in inRoleId int,
in inRetailerId int,schedul varchar(20),s_date varchar(30))
BEGIN
if schedul = 3 then 
insert into t_timesheet_workschedule(`retailerId`,`schedule`,`startDate`) values 
(inRetailerId,schedul,s_date);
else 
insert into t_timesheet_workschedule(`retailerId`,`schedule`) values 
(inRetailerId,schedul);
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_time_approvedOrReject` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_time_approvedOrReject`(st int,uid int,chdat varchar(45),appOrRejBy int(11),rreason text)
BEGIN
UPDATE `portal`.`t_time_timesheet`
SET
status = st,
approvedOrRejectedBy=appOrRejBy,
rejectionReason=rreason
WHERE userId = uid and date=chdat;
select status from t_time_timesheet where userId=uid and date=chdat;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_time_checkUserTimesheet` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_time_checkUserTimesheet`(usid int,tdate varchar(45))
BEGIN

set @tid =(Select id from t_time_timesheet where userId=usid and date=tdate);
select * from t_time_timesheetassignment where timeSheetId=@tid;
select status from t_time_timesheet where userId=usid and date=tdate;
select firstName,lastName from t_userdetails where id=usid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_time_getTime` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_time_getTime`(usid int,rid int)
BEGIN
Select * from t_time_intervalbyretailer where retailerId=rid;
Select  Distinct projectTitle ,userId from t_mapuserassig as tmap inner join t_assignment as ts on tmap.assId=ts.id 
inner join t_projectdetails as tp on tp.id=ts.ProjectId 
where userId=usid;

Select WBSName,w.WBSID,assig.id,assig.AssignmentDate,assig.AssignmentEndDate from t_wbs as w inner join  t_assignment as assig on w.WBSID=assig.WBSID 
inner join t_mapuserassig as mp on mp.assId=assig.id where mp.userId=usid  ;
Select 1 from t_retailer as tr  inner join t_userdetails as tu where tr.id=rid and tr.emailId=tu.userEmail;
select holidaydate from t_holiday; 
select managerId from t_userdetails where id=usid;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_time_getUserUnderSupervisor` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_time_getUserUnderSupervisor`(userid int, rolid int,retailerid int,cdat varchar(45))
BEGIN
if rolid=1 then
Select u.id,firstName,lastName,t.status from t_userdetails as u inner join t_time_timesheet 
as t on u.id=t.userId where u.retailerId=retailerid and u.id!=userid and t.date=cdat;

else
if rolid=4 then
Select u.id,firstName,lastName,t.status from t_userdetails as u inner join t_time_timesheet 
as t on u.id=t.userId where u.managerId=userid and t.date=cdat;

end if;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_time_submitTimesheet` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_time_submitTimesheet`(retailerId int,
userIde int,
fillDate1 datetime,
date1 varchar(45),
day1 varchar(10),
totalHours1 int,
status1 int,
supervisor1 varchar(45),
approvedOrRejectedBy1 varchar(45),
approvedOrRejectedDate1 datetime,
rejectionReason1 varchar(45))
BEGIN
DECLARE i INT Default 0 ;
set @x=(select id from t_time_timesheet where userId=userIde and date=date1);
if @x is null then
INSERT INTO t_time_timesheet
VALUES
(0,
retailerId,
userIde,
fillDate1,
date1,
day1,
totalHours1,
status1,
supervisor1,
approvedOrRejectedBy1,
approvedOrRejectedDate1,
rejectionReason1
);
set i=LAST_INSERT_ID();
Select i;
else
UPDATE t_time_timesheet
SET
fillDate = fillDate1,
totalHours = totalHours1,
status = status1,
supervisor = supervisor1,
approvedOrRejectedBy =approvedOrRejectedBy1 ,
approvedOrRejectedDate = approvedOrRejectedDate1,
rejectionReason = rejectionReason1
WHERE userId = userIde and date=date1;
set i=(select id from t_time_timesheet where userId = userIde and date=date1);
select i;
end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_time_submitTimesheetAssignment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_time_submitTimesheetAssignment`(alluser text
,allcolumn text,timesid int)
BEGIN
DECLARE i INT Default 1 ;
DECLARE j INT Default 1 ;
DECLARE columnlen INT Default 0 ;
 DECLARE l INT Default 0 ;
drop table  if exists tempAssign;
Create temporary table tempAssign like t_time_timesheetassignment;
set @len=(Select count(id) from (select id from t_time_timesheetassignment where timeSheetId=timesid) as table1 ) ;

if @len = 0 then
select 4;
call usp_split_nr(alluser,'||','temp1');
set l= (select count(id) from temp1);
select * from temp1;
simple_loop: LOOP     
set @data2= (select variable from temp1 where Id = i); 
select @data2;   
set @var1=concat("INSERT INTO t_time_timesheetassignment(",allcolumn,") values(",@data2,");"); 
 select @var1;
Select i,l;
 PREPARE stmt FROM @var1;
 EXECUTE stmt;
 DEALLOCATE PREPARE stmt;

   set i=i+1;
         IF i=l+1 THEN
            LEAVE simple_loop;
         END IF;
   END LOOP simple_loop;
drop table if exists temp1;


else



select 5;

call usp_split_nr(alluser,'||','temp1');
set l= (select count(id) from temp1);
#select * from temp1;
simple_loop: LOOP     
set @data2= (select variable from temp1 where Id = i); 
#select @data2;   
set @var1=concat("INSERT INTO tempAssign(",allcolumn,") values(",@data2,");"); 
 PREPARE stmt FROM @var1;
 EXECUTE stmt;
 DEALLOCATE PREPARE stmt;

   set i=i+1;
         IF i=l+1 THEN
            LEAVE simple_loop;
         END IF;
   END LOOP simple_loop;
drop table if exists temp1;

select * from t_time_timesheetassignment;
UPDATE t_time_timesheetassignment t inner join tempAssign tmp on 
t.timeAssignmentId=tmp.timeAssignmentId and t.wbsId =tmp.wbsId and t.timeSheetId=tmp.timeSheetId
SET
t.timeAssignmentId = tmp.timeAssignmentId ,
t.wbsId = tmp.wbsId,
t.timeSheetId = tmp.timeSheetId,
t.Day1 = tmp.Day1,
t.Day2 = tmp.Day2,
t.Day3 = tmp.Day3,
t.Day4 = tmp.Day4,
t.Day5 = tmp.Day5,
t.Day6 = tmp.Day6,
t.Day7 = tmp.Day7,
t.Day8 = tmp.Day8,
t.Day9 = tmp.Day9,
t.Day10 = tmp.Day10,
t.Day11 = tmp.Day11,
t.Day12 = tmp.Day12,
t.Day13 = tmp.Day13,
t.Day14 = tmp.Day14,
t.Day15 = tmp.Day15,
t.Day16 = tmp.Day16,
t.Day17 = tmp.Day17,
t.Day18 = tmp.Day18,
t.Day19 = tmp.Day19,
t.Day20 = tmp.Day20,
t.Day21 = tmp.Day21,
t.Day22 = tmp.Day22,
t.Day23 = tmp.Day23,
t.Day24 = tmp.Day24,
t.Day25 = tmp.Day25,
t.Day26 = tmp.Day26,
t.Day27 = tmp.Day27,
t.Day28 = tmp.Day28,
t.Day29 = tmp.Day29,
t.Day30 = tmp.Day30,
t.Day31 = tmp.Day31,
t.total = tmp.total ;
select * from t_time_timesheetassignment;
end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_UpdateExpenseforClaime_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_UpdateExpenseforClaime_rsandinr`(expenseTypeId int,
tripassignment int,
fromdate datetime,
todate datetime,
currencyId int,
totalExpense int, 
timeSheetId int,
claimStatus int,
createdBy int,
modifiedBy int,
expId1 int
)
BEGIN
UPDATE `t_tex_expenseclaime`
SET
`expenseid` = expenseTypeId,
`tripassignmentId` = tripassignmentId,
`fromdate` = fromdate,
`toDate` = todate,
`currencyId` = currencyId,
`totalExpense` = totalExpense,
`timeSheetId` = timeSheetId,
`modifyDate` = now(),
`modifiedBy` = modifiedBy
WHERE expId = expId1 and expenseid=expenseTypeId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updateExpenseforFood_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updateExpenseforFood_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
reason varchar(500),
currencyId int,
totalExpense int,
createdBy int,
modifiedBy int,
expId int,
expenseClaimid1 int
)
BEGIN
UPDATE `t_tex_foodexpense`
SET
`expenseId` =expenseType,
`reason` = reason
WHERE id = expId;
call `usp_updateExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,expenseClaimid1,expId);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=expenseClaimid1);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,expenseClaimid1);
#call`usp_UpdateExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,expId);
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updateExpenseforOther_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updateExpenseforOther_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),

reason varchar(500),
currencyId int,
totalExpense int,

createdBy int,

modifiedBy int,
expId int,
expenseClaimid1 int
)
BEGIN
UPDATE `t_tex_otherexpense`
SET
`expenseId` = expenseType,
`reason` = reason
WHERE `id` = expId;
call `usp_updateExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,expenseClaimid1,expId);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=@expenseClaimid1);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,expenseClaimid1);
#call `usp_UpdateExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,expId);
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updateExpenseforPerDiem_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updateExpenseforPerDiem_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
hotelName varchar(200), 
reason varchar(500),
ifnotthenother varchar(200),
ratePerDay int,
totalDay int,
currencyId int,
totalExpense int,

createdBy int,

modifiedBy int,
expId int,
expenseClaimid1 int
)
BEGIN
update `t_tex_perdiemexpense`
set
`expenseId`=expenseType,
`hotalName`=hotelName,
`reason`=reason,
`perDiemRate`=ratePerDay,
`ifNotThenOther`=ifnotthenother,
`totalDays`=totalDay
where id=expId;
call `usp_updateExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,expenseClaimid1,expId);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=expenseClaimid1);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,expenseClaimid1);
#call`usp_UpdateExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,expId);
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updateExpenseforPhone_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updateExpenseforPhone_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),

reason varchar(500),
currencyId int,
totalExpense int,

createdBy int,

modifiedBy int,
expId int,
expenseClaimid1 int
)
BEGIN

update `t_tex_phoneexpense`
set
`expenseId`= expenseType,
`reason`=reason
where id=expId;
call `usp_updateExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,expenseClaimid1,expId);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=expenseClaimid1);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,expenseClaimid1);
#call `usp_UpdateExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,expId);
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updateExpenseforRSD_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updateExpenseforRSD_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
typeOfVehicle varchar(200), 
reason varchar(500),
ifnotthenother varchar(200),
ratePerKm int,
totalKm int,
currencyId int,
totalExpense int,

createdBy int,

modifiedBy int,
expId int,
expenseClaimid1 int
)
BEGIN

update `t_tex_rsdexpense`
set
`expenseId`=expenseType,
`typeOfVehicle`=typeOfVehicle,
`reason`=reason,
`perkmRate`=ratePerKm,
`ifNotThenOther`=ifnotthenother,
`totalKmTravel`=totalKm
where id=expId;
call `usp_updateExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,expenseClaimid1,expId);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=expenseClaimid1);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,expenseClaimid1);
#call`usp_UpdateExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,expId);
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updateExpenseforsubTable_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updateExpenseforsubTable_rsandinr`(expenseTypeId int,
tripassignment1 int,
fromdate1 varchar(100),
todate1 varchar(100),
currencyId1 int,
totalExpense1 int, 
expenseclaimId int,
expid1 int
)
BEGIN
update t_tex_expensesubtable
set
currencyId=currencyId1,
totalExpense=totalExpense1,
fromDate=fromdate1,
toDate=todate1,
tripAssignment=tripassignment1
where expId=expid1  and expenseType=expenseTypeId  and id>0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updateExpenseforTravel_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updateExpenseforTravel_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
travelType varchar(200), 
reason varchar(500),
ifnotthenother varchar(200),
ratePerDay int,
totalDay int,
currencyId int,
totalExpense int,
createdBy int,
modifiedBy int,
expId int,
expenseClaimid1 int
)
BEGIN

update `t_tex_travelexpense`
set
`expenseid`=expenseType,
`travelType`=travelType,
`reason`=reason,
`ifNotThenOther`=ifnotthenother,
`ratePerDay`=ratePerDay,
`totalDay`=totalDay
where id=expId;
call `usp_updateExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,expenseClaimid1,expId);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=expenseClaimid1);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,expenseClaimid1);
#call`usp_UpdateExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,expId);
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updatetHotelExpense_rsandinr` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updatetHotelExpense_rsandinr`(expenseType int,
tripassignment int,
fromdate varchar(100),
todate varchar(100),
hotelName varchar(200), 
reason varchar(500),
ifnotthenother varchar(200),
ratePerDay int,
totalDay int,
currencyId int,
totalExpense int,

createdBy int,

modifiedBy int,
expId int,
expenseClaimid1 int
)
BEGIN
declare exp int;

update `t_tex_hotelexpense`
set
`expenseid`=expenseType,
`hotelName`=hotelName,
`reason`=reason,
`ifNotThenOther`=ifnotthenother,
`ratePerDay`=ratePerDay,
`totalDay`=totalDay
where id=expId;
#set @expenseClaimid= (SELECT expenseclaimId FROM t_e_expenseClaime ORDER BY expenseclaimId DESC limit 1);
call `usp_updateExpenseforsubTable_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,expenseClaimid1,expId);
 SET @totalExp=(select sum(totalExpense) from t_tex_expensesubtable where expenseclaimId=expenseClaimid1);
call `usp_ex_updateExpenseforClaime_rsandinr`(@totalExp,modifiedBy,expenseClaimid1);

#call`usp_UpdateExpenseforClaime_rsandinr`(expenseType,tripassignment,fromdate,todate,currencyId,totalExpense,1,1,createdBy,modifiedBy,expId);
#call Ex_getExpenseType(createdBy);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_updtMaster` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_updtMaster`(codenew int ,
 descnew varchar(500) , tempcode int,des1 varchar(500),rate double,mby int,
active tinyint(2), id1 int, in inRetId int)
begin
select tt.flag as fl from t_mastersdescription tt where code=codenew and description1=descnew;
Select count(1) from t_mastersdescription where code=tempcode and description1=des1 
and id !=id1 and retailerId =inRetId
into @ifExist;

if(tempcode=1) then
Select count(t.id)  from t_mastersdescription t 
inner join t_bug_bugdetails b on t.id=b.status
where t.code=tempcode and t.id=id1 and t.retailerId =inRetId into @ifExist2;  
else if tempcode=2 then  

Select count(t.id)  from t_mastersdescription t 
inner join t_bug_bugdetails b on t.id=b.priority
where t.code=tempcode and t.id=id1 and t.retailerId =inRetId into @ifExist2;  

else

if(tempcode=3) then
Select count(t.id)  from t_mastersdescription t 
inner join t_bug_bugdetails b on t.id=b.severity
where t.code=tempcode and t.id=id1 and t.retailerId =inRetId into @ifExist2;  
end if;
end if;
end if;


if( @ifExist=0 and( codenew=1 or codenew = 2 or codenew = 3 or codenew= 5 )and (@ifExist2=0 or active=1)
 ) then 
update t_mastersdescription set code=tempcode,description1=des1,lastModifiedDate=now(),lastModifiedBy=mby,
isActive=active,currencyRate=rate
  where id=id1;		
end if;

if( @ifExist=0 and ( codenew=6 or codenew = 7 or codenew = 4 or codenew= 8)) then 
update t_mastersdescription set code=tempcode,description1=des1,lastModifiedDate=now(),lastModifiedBy=mby,
isActive=active,currencyRate=rate
  where id=id1;		
  Select @ifExist as flag;
end if;




if(@ifExist>0) then
Set @ifExist=2;
end if;

if(@ifExist2>0 and active=0) then
Set @ifExist=3;
end if;

Select @ifExist as flag;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_validUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_validUser`(userName varchar(100), passcode varchar(100))
BEGIN
if userName is not null and passcode is not null then
select * from t_userdetails where userEmail=userName and userPassword=passcode 
and isValidated=1;

SELECT p.* FROM portal.t_userdetails u left join t_usermodulemapping um on u.id=um.userId
left join t_retailermodulemapping rm on u.id=rm.retailerId
inner join t_portalmodules p on p.id=rm.moduleId or p.id=um.userId
where  u.userEmail=userName and u.userPassword=passcode 
and u.isValidated=1;

end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_verifyUserViaEmail` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_verifyUserViaEmail`(email varchar(200))
BEGIN
update t_userdetails set isValidated=1 where userEmail =email;
select * from t_userdetails where userEmail=email;
 #and userPassword=passcode;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `usp_wbsStatus` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`polestarportal`@`%` PROCEDURE `usp_wbsStatus`(st int,in inUserId int, in inRoleId int,
in inRetailerId int)
BEGIN
if st=1 then
select *from t_wbs as t
 left outer join t_projectdetails as p on t.projectId=p.id
left outer join t_location as loc on t.WBSLocation=loc.id
left outer join t_userdetails as us on t.WBSOwner=us.id

where t.WBSStatus=1 and t.retailerId=inRetailerId;

else
select *from t_wbs as t
 left outer join t_projectdetails as p on t.projectId=p.id
left outer join t_location as loc on t.WBSLocation=loc.id
left outer join t_userdetails as us on t.WBSOwner=us.id
where t.WBSStatus=0 and t.retailerId=inRetailerId;
end if;
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

-- Dump completed on 2016-03-28 20:14:49
