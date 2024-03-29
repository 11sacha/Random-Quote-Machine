const colorArray = [ 'hsl(257, 47.91650960191416%, 50%)',
                    'hsl(174, 18.022062606003296%, 50%)',
                    'hsl(12, 25.44869660532898%, 50%)',
                    'hsl(291, 65.55645658570268%, 50%)',
                    'hsl(190, 52.56970705947796%, 50%)',
                    'hsl(124, 13.361656525678312%, 50%)',
                    'hsl(95, 70.92765365051787%, 50%)',
                    'hsl(299, 57.30802955159267%, 50%)',
                    'hsl(26, 80.77996147239406%, 50%)',
                    'hsl(145, 83.08889256743%, 50%)',
                    'hsl(157, 15.135879709930467%, 50%)',
                    'hsl(148, 94.72032476633669%, 50%)',
                    'hsl(198, 57.054614156199854%, 50%)',
                    'hsl(30, 46.11837797617522%, 50%)',
                    'hsl(69, 14.030020144119426%, 50%)',
                    'hsl(104, 38.194537547273%, 50%)',
                    'hsl(127, 72.14077131423156%, 50%)',
                    'hsl(180, 64.02505166267265%, 50%)',
                    'hsl(282, 49.15771589198763%, 50%)',
                    'hsl(192, 34.62882849965305%, 50%)',
                    'hsl(225, 19.659397490728804%, 50%)',
                    'hsl(2, 25.176792771595657%, 50%)',
                    'hsl(219, 84.76661456133643%, 50%)',
                    'hsl(74, 87.31796981702796%, 50%)',
                    'hsl(202, 18.961197103396653%, 50%)',
                    'hsl(21, 13.111831166404242%, 50%)',
                    'hsl(302, 88.35812906841231%, 50%)',
                    'hsl(223, 13.060264107842091%, 50%)',
                    'hsl(215, 39.99305805630606%, 50%)',
                    'hsl(250, 61.76448213997896%, 50%)',
                    'hsl(193, 92.83629631561448%, 50%)',
                    'hsl(241, 60.76626617847787%, 50%)',
                    'hsl(175, 9.012750483417054%, 50%)',
                    'hsl(107, 43.28226100234007%, 50%)',
                    'hsl(239, 91.91302284533216%, 50%)',
                    'hsl(90, 41.26699878455924%, 50%)',
                    'hsl(129, 88.31825034287557%, 50%)',
                    'hsl(163, 69.08207120193835%, 50%)',
                    'hsl(116, 74.08613412896368%, 50%)',
                    'hsl(20, 65.11004072765509%, 50%)',
                    'hsl(147, 97.41261260589343%, 50%)',
                    'hsl(1, 18.659220183261116%, 50%)',
                    'hsl(170, 96.74340044830323%, 50%)',
                    'hsl(332, 1.7789497679390864%, 50%)',
                    'hsl(75, 35.392325170545114%, 50%)',
                    'hsl(101, 91.3920638814106%, 50%)',
                    'hsl(132, 31.481789380936288%, 50%)',
                    'hsl(189, 17.427110427894466%, 50%)',
                    'hsl(185, 6.2715139498797035%, 50%)',
                    'hsl(10, 66.26001289518011%, 50%)',
                    'hsl(126, 33.86597217372138%, 50%)',
                    'hsl(23, 20.266729089946224%, 50%)',
                    'hsl(179, 61.31148117617744%, 50%)',
                    'hsl(242, 20.659566150973063%, 50%)',
                    'hsl(102, 57.879554124606834%, 50%)',
                    'hsl(32, 64.69297588957485%, 50%)',
                    'hsl(37, 21.380204394326043%, 50%)',
                    'hsl(318, 80.347348460136%, 50%)',
                    'hsl(43, 47.02276785807589%, 50%)',
                    'hsl(120, 57.264026956315625%, 50%)',
                    'hsl(248, 5.60301749214811%, 50%)',
                    'hsl(324, 5.8877337652244455%, 50%)',
                    'hsl(11, 94.0161701280035%, 50%)',
                    'hsl(205, 89.66122303247579%, 50%)',
                    'hsl(45, 1.1667127733735683%, 50%)',
                    'hsl(219, 68.49909060130103%, 50%)',
                    'hsl(286, 12.017267676416354%, 50%)',
                    'hsl(135, 25.12311032219032%, 50%)',
                    'hsl(62, 99.50632539789498%, 50%)',
                    'hsl(228, 4.447631124292761%, 50%)',
                    'hsl(157, 81.51837235548258%, 50%)',
                    'hsl(208, 38.46020878975707%, 50%)',
                    'hsl(181, 12.570759812634424%, 50%)',
                    'hsl(77, 12.699773523174906%, 50%)',
                    'hsl(72, 92.49602552322224%, 50%)',
                    'hsl(247, 16.24827929909689%, 50%)',
                    'hsl(275, 18.450376635266874%, 50%)',
                    'hsl(290, 69.78216558366029%, 50%)',
                    'hsl(87, 6.074947280871834%, 50%)',
                    'hsl(265, 26.740622121453093%, 50%)',
                    'hsl(194, 66.96308130791589%, 50%)',
                    'hsl(186, 93.18695969669592%, 50%)',
                    'hsl(322, 88.85912786806114%, 50%)',
                    'hsl(59, 99.10370357324987%, 50%)',
                    'hsl(121, 33.27169412948725%, 50%)',
                    'hsl(299, 37.33874408781457%, 50%)',
                    'hsl(212, 93.07834089450007%, 50%)',
                    'hsl(45, 9.759340747244828%, 50%)',
                    'hsl(338, 31.713255927982154%, 50%)',
                    'hsl(114, 47.18762003494419%, 50%)',
                    'hsl(79, 36.57918111520693%, 50%)',
                    'hsl(159, 51.36472804049757%, 50%)',
                    'hsl(230, 1.777841333790886%, 50%)',
                    'hsl(280, 9.831426777890794%, 50%)',
                    'hsl(244, 63.01621300414912%, 50%)',
                    'hsl(320, 14.36983823806366%, 50%)',
                    'hsl(106, 59.06350018639701%, 50%)',
                    'hsl(21, 13.58210717408921%, 50%)',
                    'hsl(331, 95.37704276588812%, 50%)',
                    'hsl(92, 90.53026820189451%, 50%)',
                    'hsl(1, 1.2451755810895193%, 50%)',
                    'hsl(215, 53.3935317080519%, 50%)',
                    'hsl(357, 26.885154193241178%, 50%)',
                    'hsl(338, 63.19503886418756%, 50%)',
                    'hsl(180, 75.30423261183384%, 50%)',
                    'hsl(295, 99.60979137521394%, 50%)',
                    'hsl(289, 69.14365888227374%, 50%)',
                    'hsl(93, 99.34589927216896%, 50%)',
                    'hsl(197, 48.13809438011663%, 50%)',
                    'hsl(286, 94.71819712620729%, 50%)',
                    'hsl(63, 66.37319878591934%, 50%)',
                    'hsl(170, 96.29743277378759%, 50%)',
                    'hsl(216, 13.227156492510028%, 50%)',
                    'hsl(211, 16.047032120143136%, 50%)',
                    'hsl(11, 1.0452763883552763%, 50%)',
                    'hsl(17, 15.08032270946944%, 50%)',
                    'hsl(304, 9.28456676751297%, 50%)',
                    'hsl(179, 48.07350726214332%, 50%)',
                    'hsl(20, 7.49220132654802%, 50%)',
                    'hsl(186, 2.3011394900344984%, 50%)',
                    'hsl(268, 75.44684980192082%, 50%)',
                    'hsl(271, 82.60953218811413%, 50%)',
                    'hsl(79, 99.97900817936633%, 50%)',
                    'hsl(259, 12.39282303069984%, 50%)',
                    'hsl(285, 15.908276930685684%, 50%)',
                    'hsl(120, 86.84029147426688%, 50%)',
                    'hsl(291, 55.49197941052748%, 50%)',
                    'hsl(28, 83.14714799242329%, 50%)',
                    'hsl(269, 36.76062729247205%, 50%)',
                    'hsl(258, 69.73054802952623%, 50%)',
                    'hsl(283, 44.12344746290764%, 50%)',
                    'hsl(126, 57.81480955981808%, 50%)',
                    'hsl(209, 76.6895266694108%, 50%)',
                    'hsl(165, 30.984485086330583%, 50%)',
                    'hsl(222, 0.14980813932767845%, 50%)',
                    'hsl(173, 53.00660117844558%, 50%)',
                    'hsl(147, 74.74916355059938%, 50%)',
                    'hsl(352, 63.44836836914987%, 50%)',
                    'hsl(152, 22.29906280371199%, 50%)',
                    'hsl(10, 88.63166404384204%, 50%)',
                    'hsl(55, 39.170666127745065%, 50%)',
                    'hsl(339, 57.23583735401452%, 50%)',
                    'hsl(85, 28.684984473983555%, 50%)',
                    'hsl(131, 68.33040388490342%, 50%)',
                    'hsl(220, 55.3367226569883%, 50%)',
                    'hsl(77, 63.68720652362643%, 50%)',
                    'hsl(343, 48.761167161242255%, 50%)',
                    'hsl(234, 42.167242700083094%, 50%)',
                    'hsl(228, 22.410940402651104%, 50%)',
                    'hsl(250, 2.2605127333681807%, 50%)' ];


export default colorArray