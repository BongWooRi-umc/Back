const { User,Article,Org,Activity,Review,ScrapCommu } = require('../models'); // 모델 파일의 경로에 따라 수정해야 할 수 있습니다.

exports.user = async () => {
  try {
    await User.bulkCreate([
      { name: 'John', phone: '123-456-7890', email: 'john@example.com', nickname: 'johnny', password: 'password1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jane', phone: '987-654-3210', email: 'jane@example.com', nickname: 'janie', password: 'password2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alice', phone: '555-555-5555', email: 'alice@example.com', nickname: 'ali', password: 'password3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bob', phone: '111-222-3333', email: 'bob@example.com', nickname: 'bobby', password: 'password4', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Emily', phone: '999-888-7777', email: 'emily@example.com', nickname: 'em', password: 'password5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Michael', phone: '777-777-7777', email: 'michael@example.com', nickname: 'mike', password: 'password6', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sarah', phone: '444-444-4444', email: 'sarah@example.com', nickname: 'sara', password: 'password7', createdAt: new Date(), updatedAt: new Date() },
      { name: 'David', phone: '666-666-6666', email: 'david@example.com', nickname: 'dave', password: 'password8', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Olivia', phone: '222-333-4444', email: 'olivia@example.com', nickname: 'liv', password: 'password9', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Matthew', phone: '888-999-0000', email: 'matthew@example.com', nickname: 'matt', password: 'password10', createdAt: new Date(), updatedAt: new Date() }
    ]);

    console.log('user 데이터가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.error('user 데이터 추가 중 오류가 발생했습니다:', error);
  }
};

exports.article = async () => {
  try {
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // 1일을 밀리초로 표현

    await Article.bulkCreate([
      { title: 'Introduction to JavaScript', content: 'JavaScript is a powerful scripting language...', likes: 20, viewCount: 500, comments: 10, createdAt: currentDate, updatedAt: currentDate, UserId: 1 },
      { title: 'Getting Started with Node.js', content: 'Node.js is a JavaScript runtime built on Chrome...', likes: 15, viewCount: 400, comments: 8, createdAt: new Date(currentDate.getTime() - oneDay), updatedAt: new Date(currentDate.getTime() - oneDay), UserId: 2 },
      { title: 'React Hooks Tutorial', content: 'React Hooks are a new feature...', likes: 25, viewCount: 600, comments: 12, createdAt: new Date(currentDate.getTime() - 2 * oneDay), updatedAt: new Date(currentDate.getTime() - 2 * oneDay), UserId: 3 },
      { title: 'SQL Basics', content: 'SQL (Structured Query Language) is a standard language...', likes: 18, viewCount: 450, comments: 9, createdAt: new Date(currentDate.getTime() - 3 * oneDay), updatedAt: new Date(currentDate.getTime() - 3 * oneDay), UserId: 4 },
      { title: 'Introduction to HTML5', content: 'HTML5 is the latest version of HTML...', likes: 22, viewCount: 550, comments: 11, createdAt: new Date(currentDate.getTime() - 4 * oneDay), updatedAt: new Date(currentDate.getTime() - 4 * oneDay), UserId: 5 },
      { title: 'CSS Flexbox Guide', content: 'Flexbox is a layout model...', likes: 30, viewCount: 700, comments: 15, createdAt: new Date(currentDate.getTime() - 5 * oneDay), updatedAt: new Date(currentDate.getTime() - 5 * oneDay), UserId: 6 },
      { title: 'Python Crash Course', content: 'Python is a high-level programming language...', likes: 28, viewCount: 650, comments: 13, createdAt: new Date(currentDate.getTime() - 6 * oneDay), updatedAt: new Date(currentDate.getTime() - 6 * oneDay), UserId: 7 },
      { title: 'Angular Tutorial', content: 'Angular is a platform and framework for building single-page client applications...', likes: 23, viewCount: 580, comments: 10, createdAt: new Date(currentDate.getTime() - 7 * oneDay), updatedAt: new Date(currentDate.getTime() - 7 * oneDay), UserId: 8 },
      { title: 'Docker Basics', content: 'Docker is a tool designed to make it easier to create, deploy, and run applications...', likes: 20, viewCount: 520, comments: 11, createdAt: new Date(currentDate.getTime() - 8 * oneDay), updatedAt: new Date(currentDate.getTime() - 8 * oneDay), UserId: 9 },
      { title: 'Introduction to MongoDB', content: 'MongoDB is a document database designed for ease of development and scaling...', likes: 27, viewCount: 670, comments: 14, createdAt: new Date(currentDate.getTime() - 9 * oneDay), updatedAt: new Date(currentDate.getTime() - 9 * oneDay), UserId: 10 }
    ]);

    console.log('article 데이터가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.error('article 데이터 추가 중 오류가 발생했습니다:', error);
  }
};

exports.org = async () => {
  try {
    await Org.bulkCreate([
      { name: 'Organization A', url: 'http://organizationA.com', tel: '123-456-7890', address: '123 Main St, CityA, CountryA', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization B', url: 'http://organizationB.com', tel: '987-654-3210', address: '456 Oak St, CityB, CountryB', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization C', url: 'http://organizationC.com', tel: '555-555-5555', address: '789 Elm St, CityC, CountryC', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization D', url: 'http://organizationD.com', tel: '111-222-3333', address: '012 Pine St, CityD, CountryD', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization E', url: 'http://organizationE.com', tel: '999-888-7777', address: '345 Maple St, CityE, CountryE', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization F', url: 'http://organizationF.com', tel: '777-777-7777', address: '678 Cedar St, CityF, CountryF', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization G', url: 'http://organizationG.com', tel: '444-444-4444', address: '901 Birch St, CityG, CountryG', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization H', url: 'http://organizationH.com', tel: '666-666-6666', address: '234 Spruce St, CityH, CountryH', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization I', url: 'http://organizationI.com', tel: '222-333-4444', address: '567 Walnut St, CityI, CountryI', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Organization J', url: 'http://organizationJ.com', tel: '888-999-0000', address: '890 Palm St, CityJ, CountryJ', createdAt: new Date(), updatedAt: new Date() }
    ]);

    console.log('예시 데이터가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.error('예시 데이터 추가 중 오류가 발생했습니다:', error);
  }
};

exports.activity = async () => {
  try {
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // 1일을 밀리초로 표현

    await Activity.bulkCreate([
      { 
        title: 'Summer Camp for Children', 
        recruBegin: new Date(currentDate.getTime() - 10 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 5 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 5 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 10 * oneDay), 
        recruNum: 50, 
        signedNum: 0, 
        content: 'A fun-filled summer camp for children aged 6-12.', 
        place_do: 'Seoul', 
        place_si: 'Gangnam', 
        actSubject: 'children and youth', 
        actType: 'short term', 
        isOnline: 'offline', 
        confirmType: 'confirm by time', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1111111', 
        createdAt: new Date(currentDate.getTime() - 10 * oneDay), 
        updatedAt: currentDate, 
        OrgId: 1 
      },
      { 
        title: 'Elderly Care Program', 
        recruBegin: new Date(currentDate.getTime() - 20 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 15 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 5 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 20 * oneDay), 
        recruNum: 30, 
        signedNum: 0, 
        content: 'Volunteers needed to assist with activities for the elderly.', 
        place_do: 'Busan', 
        place_si: 'Seo', 
        actSubject: 'seniors', 
        actType: 'long term', 
        isOnline: 'offline', 
        confirmType: 'confirm by activity', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1111100', 
        createdAt: new Date(currentDate.getTime() - 20 * oneDay), 
        updatedAt: new Date(currentDate.getTime() - 5 * oneDay), 
        OrgId: 2 
      },
      { 
        title: 'Food Distribution Drive', 
        recruBegin: new Date(currentDate.getTime() - 5 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 2 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 2 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 5 * oneDay), 
        recruNum: 100, 
        signedNum: 0, 
        content: 'Volunteers needed to distribute food to the needy.', 
        place_do: 'Incheon', 
        place_si: 'Jung', 
        actSubject: 'other', 
        actType: 'short term', 
        isOnline: 'offline', 
        confirmType: 'confirm by time', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '0001111', 
        createdAt: new Date(currentDate.getTime() - 5 * oneDay), 
        updatedAt: new Date(), 
        OrgId: 3 
      },
      { 
        title: 'Environmental Cleanup Event', 
        recruBegin: new Date(currentDate.getTime() - 15 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 10 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 10 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 15 * oneDay), 
        recruNum: 80, 
        signedNum: 0, 
        content: 'Join us in cleaning up the local park and promoting environmental awareness.', 
        place_do: 'Daejeon', 
        place_si: 'Yuseong', 
        actSubject: 'environment', 
        actType: 'long term', 
        isOnline: 'offline', 
        confirmType: 'confirm by both', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1110000', 
        createdAt: new Date(currentDate.getTime() - 15 * oneDay), 
        updatedAt: new Date(), 
        OrgId: 4 
      },
      { 
        title: 'Tutoring Program for Refugees', 
        recruBegin: new Date(currentDate.getTime() - 20 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 15 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 5 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 20 * oneDay), 
        recruNum: 50, 
        signedNum: 0, 
        content: 'Volunteers needed to provide educational support to refugee children.', 
        place_do: 'Seoul', 
        place_si: 'Mapo', 
        actSubject: 'multicultural families', 
        actType: 'short term', 
        isOnline: 'offline', 
        confirmType: 'confirm by activity', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1111111', 
        createdAt: new Date(currentDate.getTime() - 20 * oneDay), 
        updatedAt: new Date(), 
        OrgId: 5 
      },
      { 
        title: 'Women Empowerment Seminar', 
        recruBegin: new Date(currentDate.getTime() - 25 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 20 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 5 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 25 * oneDay), 
        recruNum: 60, 
        signedNum: 0, 
        content: 'Join us for a seminar focused on empowering women in the community.', 
        place_do: 'Daegu', 
        place_si: 'Buk', 
        actSubject: 'women', 
        actType: 'long term', 
        isOnline: 'offline', 
        confirmType: 'confirm by time', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1111111', 
        createdAt: new Date(currentDate.getTime() - 25 * oneDay), 
        updatedAt: new Date(), 
        OrgId: 6 
      },
      { 
        title: 'Community Garden Project', 
        recruBegin: new Date(currentDate.getTime() - 30 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 25 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 5 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 30 * oneDay), 
        recruNum: 40, 
        signedNum: 0, 
        content: 'Help us create a community garden to promote urban agriculture and healthy living.', 
        place_do: 'Gwangju', 
        place_si: 'Dong', 
        actSubject: 'environment', 
        actType: 'short term', 
        isOnline: 'offline', 
        confirmType: 'confirm by both', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1111111', 
        createdAt: new Date(currentDate.getTime() - 30 * oneDay), 
        updatedAt: new Date(), 
        OrgId: 7 
      },
      { 
        title: 'Youth Leadership Conference', 
        recruBegin: new Date(currentDate.getTime() - 25 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 20 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 10 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 25 * oneDay), 
        recruNum: 70, 
        signedNum: 0, 
        content: 'A conference aimed at developing leadership skills among youth.', 
        place_do: 'Ulsan', 
        place_si: 'Nam', 
        actSubject: 'children and youth', 
        actType: 'long term', 
        isOnline: 'offline', 
        confirmType: 'confirm by activity', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1111111', 
        createdAt: new Date(currentDate.getTime() - 25 * oneDay), 
        updatedAt: new Date(), 
        OrgId: 8 
      },
      { 
        title: 'Senior Center Volunteer Program', 
        recruBegin: new Date(currentDate.getTime() - 10 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 5 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 5 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 10 * oneDay), 
        recruNum: 35, 
        signedNum: 0, 
        content: 'Volunteers needed to assist with daily activities for seniors at our community center.', 
        place_do: 'Incheon', 
        place_si: 'Dong', 
        actSubject: 'seniors', 
        actType: 'short term', 
        isOnline: 'offline', 
        confirmType: 'confirm by time', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1111111', 
        createdAt: new Date(currentDate.getTime() - 10 * oneDay), 
        updatedAt: new Date(), 
        OrgId: 9 
      },
      { 
        title: 'Health and Wellness Fair', 
        recruBegin: new Date(currentDate.getTime() - 30 * oneDay), 
        recruEnd: new Date(currentDate.getTime() - 25 * oneDay), 
        actBegin: new Date(currentDate.getTime() + 10 * oneDay), 
        actEnd: new Date(currentDate.getTime() + 30 * oneDay), 
        recruNum: 90, 
        signedNum: 0, 
        content: 'Join us for a fair promoting health and wellness in the community.', 
        place_do: 'Seoul', 
        place_si: 'Yongsan', 
        actSubject: 'other', 
        actType: 'long term', 
        isOnline: 'offline', 
        confirmType: 'confirm by both', 
        actField: 'Sample', 
        actFieldDetail: 'Detail', 
        isRecru: 1, 
        actDay: '1111111', 
        createdAt: new Date(currentDate.getTime() - 30 * oneDay), 
        updatedAt: new Date(), 
        OrgId: 10 
      },
      // Add more activity examples here
    ]);

    console.log('activity 데이터가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.error('activity 데이터 추가 중 오류가 발생했습니다:', error);
  }
};

exports.review = async () => {
  try {
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // 1일을 밀리초로 표현

    await Review.bulkCreate([
      { 
        actTitle: 'Summer Camp for Children', 
        content: 'Great experience for my kids. They had a lot of fun and learned new things.', 
        score: 'five', 
        scrapCount: 10, 
        viewCount: 50, 
        comments: 3, 
        createdAt: new Date(currentDate.getTime() - 10 * oneDay), 
        updatedAt: currentDate, 
        ActId: 1, 
        UserId: 1 
      },
      // Add more review examples here
      { 
        actTitle: 'Elderly Care Program', 
        content: 'Rewarding experience. I enjoyed spending time with the elderly and making them smile.', 
        score: 'four', 
        scrapCount: 8, 
        viewCount: 45, 
        comments: 2, 
        createdAt: new Date(currentDate.getTime() - 20 * oneDay), 
        updatedAt: new Date(), 
        ActId: 2, 
        UserId: 2 
      },
      { 
        actTitle: 'Food Distribution Drive', 
        content: 'Volunteered for this event last week. It was heartwarming to see so many people come together to help those in need.', 
        score: 'fourHalf', 
        scrapCount: 5, 
        viewCount: 40, 
        comments: 1, 
        createdAt: new Date(currentDate.getTime() - 5 * oneDay), 
        updatedAt: new Date(), 
        ActId: 3, 
        UserId: 3 
      },
      { 
        actTitle: 'Environmental Cleanup Event', 
        content: 'A wonderful initiative. I participated and felt a sense of accomplishment after cleaning up the park.', 
        score: 'four', 
        scrapCount: 7, 
        viewCount: 55, 
        comments: 2, 
        createdAt: new Date(currentDate.getTime() - 15 * oneDay), 
        updatedAt: new Date(), 
        ActId: 4, 
        UserId: 4 
      },
      { 
        actTitle: 'Tutoring Program for Refugees', 
        content: 'I volunteered to teach English to refugee children. It was challenging but also very rewarding.', 
        score: 'five', 
        scrapCount: 12, 
        viewCount: 70, 
        comments: 4, 
        createdAt: new Date(currentDate.getTime() - 20 * oneDay), 
        updatedAt: new Date(), 
        ActId: 5, 
        UserId: 5 
      },
      { 
        actTitle: 'Women Empowerment Seminar', 
        content: 'Attended this seminar and found it inspiring. It motivated me to pursue my goals.', 
        score: 'threeHalf', 
        scrapCount: 3, 
        viewCount: 35, 
        comments: 1, 
        createdAt: new Date(currentDate.getTime() - 25 * oneDay), 
        updatedAt: new Date(), 
        ActId: 6, 
        UserId: 6 
      },
      { 
        actTitle: 'Community Garden Project', 
        content: 'I volunteered to help plant vegetables in the community garden. It was a fun and educational experience.', 
        score: 'four', 
        scrapCount: 6, 
        viewCount: 45, 
        comments: 2, 
        createdAt: new Date(currentDate.getTime() - 30 * oneDay), 
        updatedAt: new Date(), 
        ActId: 7, 
        UserId: 7 
      },
      { 
        actTitle: 'Youth Leadership Conference', 
        content: 'Attended as a participant. It was well-organized and provided valuable insights into leadership.', 
        score: 'fourHalf', 
        scrapCount: 8, 
        viewCount: 60, 
        comments: 3, 
        createdAt: new Date(currentDate.getTime() - 25 * oneDay), 
        updatedAt: new Date(), 
        ActId: 8, 
        UserId: 8 
      },
      { 
        actTitle: 'Senior Center Volunteer Program', 
        content: 'Volunteered to play board games with seniors. They appreciated the company and so did I.', 
        score: 'four', 
        scrapCount: 4, 
        viewCount: 30, 
        comments: 1, 
        createdAt: new Date(currentDate.getTime() - 10 * oneDay), 
        updatedAt: new Date(), 
        ActId: 9, 
        UserId: 9 
      },
      { 
        actTitle: 'Health and Wellness Fair', 
        content: 'Attended with my family. It was informative and we learned a lot about healthy living.', 
        score: 'three', 
        scrapCount: 2, 
        viewCount: 20, 
        comments: 1, 
        createdAt: new Date(currentDate.getTime() - 30 * oneDay), 
        updatedAt: new Date(), 
        ActId: 10, 
        UserId: 10 
      },
      { 
        actTitle: 'Community Cleanup Day', 
        content: 'Participated in cleaning up the neighborhood. It was a great way to give back to the community.', 
        score: 'fourHalf', 
        scrapCount: 5, 
        viewCount: 40, 
        comments: 1, 
        createdAt: new Date(currentDate.getTime() - 5 * oneDay), 
        updatedAt: new Date(), 
        ActId: 1, 
        UserId: 1 
      },
      { 
        actTitle: 'Youth Mentorship Program', 
        content: 'Mentored a group of high school students. It was fulfilling to see them grow and succeed.', 
        score: 'five', 
        scrapCount: 12, 
        viewCount: 70, 
        comments: 4, 
        createdAt: new Date(currentDate.getTime() - 20 * oneDay), 
        updatedAt: new Date(), 
        ActId: 2, 
        UserId: 2 
      },
      { 
        actTitle: 'Animal Shelter Volunteer', 
        content: 'Spent the weekend volunteering at the local animal shelter. It was heartwarming to help the animals in need.', 
        score: 'four', 
        scrapCount: 6, 
        viewCount: 45, 
        comments: 2, 
        createdAt: new Date(currentDate.getTime() - 30 * oneDay), 
        updatedAt: new Date(), 
        ActId: 3, 
        UserId: 3 
      },
      { 
        actTitle: 'Habitat for Humanity Build', 
        content: 'Participated in building a home for a family in need. It was a humbling and rewarding experience.', 
        score: 'fourHalf', 
        scrapCount: 8, 
        viewCount: 60, 
        comments: 3, 
        createdAt: new Date(currentDate.getTime() - 25 * oneDay), 
        updatedAt: new Date(), 
        ActId: 4, 
        UserId: 4 
      },
      { 
        actTitle: 'Language Exchange Program', 
        content: 'Joined a language exchange program to practice my Spanish skills. Met some great people and improved my language proficiency.', 
        score: 'threeHalf', 
        scrapCount: 3, 
        viewCount: 35, 
        comments: 1, 
        createdAt: new Date(currentDate.getTime() - 25 * oneDay), 
        updatedAt: new Date(), 
        ActId: 5, 
        UserId: 5 
      },
      { 
        actTitle: 'Community Theater Production', 
        content: 'Volunteered backstage for a community theater production. It was a fun and creative experience.', 
        score: 'four', 
        scrapCount: 6, 
        viewCount: 45, 
        comments: 2, 
        createdAt: new Date(currentDate.getTime() - 30 * oneDay), 
        updatedAt: new Date(), 
        ActId: 6, 
        UserId: 6 
      },
      { 
        actTitle: 'Soup Kitchen Volunteer', 
        content: 'Helped serve meals at the local soup kitchen. It was fulfilling to make a difference in the lives of those less fortunate.', 
        score: 'fourHalf', 
        scrapCount: 8, 
        viewCount: 60, 
        comments: 3, 
        createdAt: new Date(currentDate.getTime() - 25 * oneDay), 
        updatedAt: new Date(), 
        ActId: 7, 
        UserId: 7 
      },
      { 
        actTitle: 'Community Health Fair', 
        content: 'Attended a health fair in the community. Learned valuable information about maintaining a healthy lifestyle.', 
        score: 'three', 
        scrapCount: 2, 
        viewCount: 20, 
        comments: 1, 
        createdAt: new Date(currentDate.getTime() - 30 * oneDay), 
        updatedAt: new Date(), 
        ActId: 8, 
        UserId: 8 
      },
      { 
        actTitle: 'Blood Donation Drive', 
        content: 'Donated blood at the local blood donation drive. It felt good to contribute to saving lives.', 
        score: 'five', 
        scrapCount: 10, 
        viewCount: 50, 
        comments: 3, 
        createdAt: new Date(currentDate.getTime() - 10 * oneDay), 
        updatedAt: new Date(), 
        ActId: 9, 
        UserId: 9 
      },
      { 
        actTitle: 'Volunteer Teaching Program', 
        content: 'Taught underprivileged children math and science. It was challenging but also very fulfilling.', 
        score: 'four', 
        scrapCount: 8, 
        viewCount: 45, 
        comments: 2, 
        createdAt: new Date(currentDate.getTime() - 20 * oneDay), 
        updatedAt: new Date(), 
        ActId: 10, 
        UserId: 10 
      },
      // Add more review examples here
    ]);

    console.log('review 데이터가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.error('review 데이터 추가 중 오류가 발생했습니다:', error);
  }
};

exports.scrapReview = async () => {
  try {
    const currentDate = new Date();

    await ScrapCommu.bulkCreate([
      { 
        scrapType: 'review', 
        title: 'Volunteering Experience', 
        context: 'Had a great volunteering experience. It was fulfilling to give back to the community.', 
        likes: 5, 
        comments: 2, 
        createdTime: currentDate, 
        ReviewId: 1, 
        UserId: 1 
      },
      // Add more example data here
      { 
        scrapType: 'review', 
        title: 'Community Cleanup Day', 
        context: 'Participated in a community cleanup day event. It was a great way to bond with neighbors.', 
        likes: 8, 
        comments: 3, 
        createdTime: currentDate, 
        ReviewId: 2, 
        UserId: 2 
      },
      { 
        scrapType: 'review', 
        title: 'Teaching English Abroad', 
        context: 'Spent a year teaching English in a rural village. It was a life-changing experience.', 
        likes: 10, 
        comments: 4, 
        createdTime: currentDate, 
        ReviewId: 3, 
        UserId: 3 
      },
      { 
        scrapType: 'review', 
        title: 'Senior Center Volunteering', 
        context: 'Volunteered at a senior center. It was heartwarming to spend time with the elderly.', 
        likes: 7, 
        comments: 3, 
        createdTime: currentDate, 
        ReviewId: 4, 
        UserId: 4 
      },
      // Add more example data here
    ]);

    console.log('Scrap review 데이터가 성공적으로 추가되었습니다.');
  } catch (error) {
    console.error('예시 데이터 추가 중 오류가 발생했습니다:', error);
  }
};

