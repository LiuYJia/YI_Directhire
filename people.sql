-- MySQL dump 10.13  Distrib 5.7.18, for Win64 (x86_64)
--
-- Host: localhost    Database: people
-- ------------------------------------------------------
-- Server version	5.7.18

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(64) NOT NULL COMMENT '用户名',
  `UserPass` varchar(64) NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Liu','698d51a19d8a121ce581499d7b701668'),(2,'111','698d51a19d8a121ce581499d7b701668'),(3,'22','b6d767d2f8ed5d21a44b0e5886680cb9');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sort` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `title` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `author` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `date` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `content` varchar(600) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'IT/互联网','最新编程语言排行榜','Jack','2018-5-28','TIOBE 最近公布了 2018 年 1 月编程语言指数排行榜，排名前三的还是 Java、C、C++， Python 和 C# 排第四和第五。'),(2,'IT/互联网','IT行业发展趋势','Jack','2018-5-29','       移动端(手机操作系统)是一个变化最快的领域，也存在很大的变数。10年之前，在诺基亚风靡全球的时候，你会想到Android有现在这么大的前景这么多的用户量吗？2010年开始(其实08年就开始酝酿了)，Android迅速崛起，发展异常的凶猛，到2012年几乎人手一台Android设备了，与此同时诺基亚却一路下滑，直至跌到低谷再也爬不起来的，后来投入微软的怀抱也发展的不太顺利，已经是大势已去。而苹果从2007年第一代iPhone诞生的时候开始，走的就是高大上的路线，主要针对的是高端人群，价格是所有手机中最高的，但技术也是最牛逼的，体验是最友好的，以至于每一次的发布会排队的人都济到爆！互联网我认为IT领域未来的发展方向，从实体方面来看一定是智能设备和物联网，从领域来看一定是互联网+，未来的网络将会越来越智能。'),(3,'职业规划','职业选择','Jack','2018-5-30','把你的技能与你的激情结合起来。如果你幸运的话，他们会自然而然的一致，但绝大多数情况下他们是不会这样的。这就意味着你得去寻找，不要怕去问问怎样才能让爱好与特长重叠起来。如果你真的在某方面很有天赋，而在另一个方面有激情，那么肯定有把它们联系起来的桥梁。\r\n\r\n更深入地了解特定的职业。你也许已经有了一些有价值的观点。或许，如果你足够幸运，你已经找到了你想要的职业。所以，你得去问问那些已经在这个行当工作的人们，发几封电邮，问问他们的工作是怎样的，很多人愿意回答你。而且这些将很有可能成为你判断工作是否合适的线索。\r\n\r\n找一个行业的资深专家或者是临近行业的专家。一旦你已经决定了并且准备开始工作了，去找一个资深的专家——在那个行当做的比较成功的人，多问问那些行业的强人，或者是在网上找一些，让他们指导你在该行业取得成功。\r\n\r\n1、你的兴趣是什么？你曾经想成为什么样的人？你对哪些知识比较有感觉，能够深入发展下去？如果不知道自己的兴趣，你可以去做一下霍兰德职业倾向测评，对自己的兴趣有一个大致的了解。\r\n2、你的性格适合做什么？不同的工作，适合不同性格的人去做。认清楚自己的性格，是非常重要的一步。了解下自己的性格特质再做决定。\r\n3、你的优势和特长是什么？有哪些拿得出手的能力？对于自己欠缺的能力，应该怎样去做？\r\n4、你性格本身存在哪些弱点需要克服？不要让弱点成为你成长中的绊脚石。');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collect_recruit`
--

DROP TABLE IF EXISTS `collect_recruit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collect_recruit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `r_username` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `s_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collect_recruit`
--

LOCK TABLES `collect_recruit` WRITE;
/*!40000 ALTER TABLE `collect_recruit` DISABLE KEYS */;
INSERT INTO `collect_recruit` VALUES (2,'11',2),(3,'11',3),(12,'11',1);
/*!40000 ALTER TABLE `collect_recruit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collect_seeker`
--

DROP TABLE IF EXISTS `collect_seeker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collect_seeker` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `s_username` varchar(64) CHARACTER SET utf8 DEFAULT NULL,
  `r_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collect_seeker`
--

LOCK TABLES `collect_seeker` WRITE;
/*!40000 ALTER TABLE `collect_seeker` DISABLE KEYS */;
INSERT INTO `collect_seeker` VALUES (54,'11',1),(55,'11',2),(56,'11',1);
/*!40000 ALTER TABLE `collect_seeker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feedback` (
  `id` int(64) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) DEFAULT NULL,
  `sort` varchar(64) DEFAULT NULL,
  `txt` varchar(255) DEFAULT NULL,
  `tel` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (3,'11','技术问题','11','111'),(5,'11','产品建议','祝越来越好','15132858043');
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img_admin`
--

DROP TABLE IF EXISTS `img_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_admin`
--

LOCK TABLES `img_admin` WRITE;
/*!40000 ALTER TABLE `img_admin` DISABLE KEYS */;
INSERT INTO `img_admin` VALUES (22,'/imgAdmin/0.1686154282480392.png'),(23,'/imgAdmin/0.9655075614031687.png'),(24,'/imgAdmin/0.5625597520299752.png'),(25,'/imgAdmin/0.5308188111618612.png');
/*!40000 ALTER TABLE `img_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `label`
--

DROP TABLE IF EXISTS `label`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `label` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `label`
--

LOCK TABLES `label` WRITE;
/*!40000 ALTER TABLE `label` DISABLE KEYS */;
INSERT INTO `label` VALUES (1,'IT/互联网'),(2,'教师'),(4,'销售'),(5,'客服咨询'),(18,'金融'),(19,'物流'),(20,'医药'),(21,'网络传媒');
/*!40000 ALTER TABLE `label` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `msg_recruit`
--

DROP TABLE IF EXISTS `msg_recruit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msg_recruit` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `num` varchar(64) DEFAULT NULL,
  `sort` varchar(64) DEFAULT NULL,
  `job` varchar(64) DEFAULT NULL,
  `money` varchar(64) DEFAULT NULL,
  `school` varchar(64) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `tel` varchar(64) DEFAULT NULL,
  `age` varchar(64) DEFAULT NULL,
  `detail` varchar(64) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msg_recruit`
--

LOCK TABLES `msg_recruit` WRITE;
/*!40000 ALTER TABLE `msg_recruit` DISABLE KEYS */;
INSERT INTO `msg_recruit` VALUES (1,'11','5-7人','IT/互联网','node.js','8k','本科','百度','15133334444','20-50','好好学习，天天向上','/imgRecruit/0.9249298684682403.jpg'),(2,'22','1人','教师','数学','6k','本科','师大','03180125489','不限','好好学习，天天向上','/imgRecruit/0.3556006815969768.jpg'),(3,'33','2人','销售','营销人员','10k','本科','索像','25345354345','30','好好学习，天天向上','/imgRecruit/0.6471711321480378.jpg'),(4,'44','6人','客服咨询','话务员','5k','本科','中国移动','54343535743','40以下','好好学习，天天向上','/imgRecruit/0.26132655010210293.jpg'),(5,'55','2-4人','金融','宣传员','7k','本科','阳光易贷','5345343543','不限','好好学习，天天向上','/imgRecruit/0.47717673997035015.jpg'),(6,'66','5人','物流','快递员','7k','本科','中通','343573573','28','好好学习，天天向上','/imgRecruit/0.3245283927998741.jpg'),(7,'77','3人','医药','研发','9k','本科','哈药','535737537','30','好好学习，天天向上','/imgRecruit/0.9472916131780731.jpg'),(8,'88','1人','网络传媒','记者','5k','本科','星空媒体','527537357','40以下','好好学习，天天向上','/imgRecruit/0.47732691112093195.jpg'),(9,'11','8人','IT/互联网','测试','8k','本科','百度','243455465','25-30','好好学习，天天向上','/imgRecruit/0.9249298684682403.jpg'),(10,'11','2','IT/互联网','2','2','本科','2','2','2','2','/imgRecruit/0.9249298684682403.jpg');
/*!40000 ALTER TABLE `msg_recruit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `msg_seeker`
--

DROP TABLE IF EXISTS `msg_seeker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `msg_seeker` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `sex` varchar(64) DEFAULT NULL,
  `sort` varchar(64) DEFAULT NULL,
  `job` varchar(64) DEFAULT NULL,
  `money` varchar(64) DEFAULT NULL,
  `school` varchar(64) DEFAULT NULL,
  `tel` varchar(64) DEFAULT NULL,
  `age` varchar(64) DEFAULT NULL,
  `detail` varchar(64) DEFAULT NULL,
  `name` varchar(64) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `msg_seeker`
--

LOCK TABLES `msg_seeker` WRITE;
/*!40000 ALTER TABLE `msg_seeker` DISABLE KEYS */;
INSERT INTO `msg_seeker` VALUES (1,'11','男','IT/互联网','Node.js','8k','本科','1513333888','22','好好学习，天天向上','小刘','/imgSeeker/0.47095634055067404.jpg'),(2,'22','男','教师','数学','6k','本科','03180125489','22','好好学习，天天向上','小赵','/imgSeeker/0.5880396868760518.jpg'),(3,'33','男','销售','售货员','8k','本科','25345354345','23','好好学习，天天向上','小李','/imgSeeker/0.7462698355686377.jpg'),(4,'44','女','客服咨询','话务员','5k','本科','54343535743','24','好好学习，天天向上','小冯','/imgSeeker/0.8605092510473284.jpg'),(5,'55','女','金融','基金','7k','本科','5345343543','35','好好学习，天天向上','小陈','/imgSeeker/0.6304186778823913.jpg'),(6,'66','男','物流','快递员','7k','本科','343573573','28','好好学习，天天向上','小王','/imgSeeker/0.35292249066078174.jpg'),(7,'77','女','医药','研发人员','9k','本科','535737537','30','好好学习，天天向上','小白','/imgSeeker/0.3068699224611151.jpg'),(8,'88','男','网络传媒','记者','5k','本科','527537357','40','好好学习，天天向上','小孙','/imgSeeker/0.31451574370141144.jpg'),(9,'99','男','IT/互联网','JAVA','10k','本科','5657645342','30','好好学习，天天向上','小张','/imgSeeker/0.10093049626332729.jpg'),(10,'aa','女','IT/互联网','测试','7k','本科','324421435','24','好好学习，天天向上','小杨','/imgSeeker/0.3068699224611151.jpg'),(11,'bb','男','教师','英语','8k','本科','345356432','28','好好学习，天天向上','小刘','/imgSeeker/0.8536641718854978.jpg'),(12,'cc','男','物流','分货员','8k','本科','8765434566','30','好好学习，天天向上','小晓','/imgSeeker/0.30136868924611804.jpg'),(13,'dd','女','医药','技术人员','8k','本科','23567765','29','好好学习，天天向上','小崔','/imgSeeker/0.9257085813159478.jpg'),(14,'ee','男','网络传媒','摄影师','9k','本科','1234565432','20','好好学习，天天向上','小赵','/imgSeeker/0.740690924975969.jpg'),(15,'ff','男','金融','证券','8k','本科','6437445456','28','好好学习，天天向上','小李','/imgSeeker/0.6304186778823913.jpg'),(16,'kk','女','IT/互联网','前端开发','10k','本科','23566534235','25','好好学习，天天向上','小丁','/imgSeeker/0.35292249066078174.jpg');
/*!40000 ALTER TABLE `msg_seeker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resume`
--

DROP TABLE IF EXISTS `resume`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `resume` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `r_username` varchar(10) NOT NULL,
  `s_username` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resume`
--

LOCK TABLES `resume` WRITE;
/*!40000 ALTER TABLE `resume` DISABLE KEYS */;
INSERT INTO `resume` VALUES (2,'11','22'),(3,'11','33'),(4,'11','11');
/*!40000 ALTER TABLE `resume` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_recruit`
--

DROP TABLE IF EXISTS `user_recruit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_recruit` (
  `r_id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`r_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_recruit`
--

LOCK TABLES `user_recruit` WRITE;
/*!40000 ALTER TABLE `user_recruit` DISABLE KEYS */;
INSERT INTO `user_recruit` VALUES (11,'11','96e79218965eb72c92a549dd5a330112','3454657687','245rhrr@qq.com'),(12,'22','e3ceb5881a0a1fdaad01296d7554868d','435654765','sg45367@sohu.com'),(13,'33','1a100d2c0dab19c4430e7d73762b3423','3234546768','dsg5365@163.com'),(14,'44','73882ab1fa529d7273da0db6b49cc4f3','34565764532','sg453@qq.com'),(15,'55','5b1b68a9abf4d2cd155c81a9225fd158','35264356789','fdh567@193.com'),(16,'66','f379eaf3c831b04de153469d1bec345e','4356475665','fgdh65@163.com'),(17,'77','f63f4fbc9f8c85d409f2f59f2b9e12d5','4235673678','3453dfsg@sohu.com'),(18,'88','21218cca77804d2ba1922c33e0151105','3245487077','dgsh45367@sohu.com');
/*!40000 ALTER TABLE `user_recruit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_seeker`
--

DROP TABLE IF EXISTS `user_seeker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_seeker` (
  `s_id` int(10) NOT NULL AUTO_INCREMENT,
  `username` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `phone` varchar(64) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_seeker`
--

LOCK TABLES `user_seeker` WRITE;
/*!40000 ALTER TABLE `user_seeker` DISABLE KEYS */;
INSERT INTO `user_seeker` VALUES (19,'11','6512bd43d9caa6e02c990b0a82652dca','678476545463','dnsjg@qq.com'),(20,'22','bcbe3365e6ac95ea2c0343a2395834dd','454685857','sft456@sohu.com'),(21,'33','182be0c5cdcd5072bb1864cdee4d3d6e','325463748','dfgs@193.com'),(22,'44','f7177163c833dff4b38fc8d2872f1ec6','356475485','dfgs@193.com'),(23,'55','b53b3a3d6ab90ce0268229151c9bde11','8674564','46tfdg@qq.com'),(24,'66','3295c76acbf4caaed33c36b1b5fc2cb1','3425364758','dsg456@qq.com'),(25,'77','28dd2c7955ce926456240b2ff0100bde','45436547658','3456dfg@sohu.com'),(26,'88','2a38a4a9316c49e5a833517c45d31070','4353657465','45dsg@qq.com'),(27,'99','ac627ab1ccbdb62ec96e702f07f6425b','5658464','dfhj456567@193.com'),(28,'aa','4124bc0a9335c27f086f24ba207a4912','654634534','467dgfhd@sohu.com'),(29,'bb','21ad0bd836b90d08f4cf640b4c298e7c','568654534','564fg@qq.com'),(30,'cc','e0323a9039add2978bf5b49550572c7c','4567876546','34565@sohu.com'),(31,'dd','1aabac6d068eef6a7bad3fdf50a05cc8','436478574','fg3546@193.com'),(32,'ee','08a4415e9d594ff960030b921d42b91e','34547389876','45dfg@sohu.com'),(33,'ff','633de4b0c14ca52ea2432a3c8a5c4c31','435475546','435@193.com'),(34,'kk','dc468c70fb574ebd07287b38d0d0676d','3546758657','sdfdg@sohu.com');
/*!40000 ALTER TABLE `user_seeker` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-31 18:49:36
