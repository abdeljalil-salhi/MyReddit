import { MigrationInterface, QueryRunner } from "typeorm";

export class DumpPosts1644543223324 implements MigrationInterface {
  public async up(_queryRunner: QueryRunner): Promise<void> {
    // await _queryRunner.query(`
    //     insert into post (title, text, "creatorId", "createdAt") values ('Prize of Peril, The (Prix du danger, Le)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

    //     Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
    //     Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-09-12T16:44:35Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Spirit of St. Louis, The', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
    //     Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 2, '2021-07-17T07:45:39Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Angel on My Shoulder', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
    //     Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.
        
    //     In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 1, '2022-02-03T00:03:00Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Designing Woman', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
        
    //     Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 1, '2021-08-05T13:53:09Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('The Red Inn', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 2, '2021-11-18T22:17:10Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Hobo with a Shotgun', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', 1, '2022-02-04T00:06:30Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('The Horribly Slow Murderer with the Extremely Inefficient Weapon', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
    //     Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
    //     Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 1, '2021-12-20T14:32:09Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Hot Rock, The', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 2, '2021-05-20T05:09:20Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Rory O''Shea Was Here (Inside I''m Dancing)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
    //     Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 1, '2021-05-29T23:42:09Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Child''s Christmas in Wales, A', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
    //     Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
    //     Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, '2021-02-18T10:50:03Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Dear Heart', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
    //     Sed ante. Vivamus tortor. Duis mattis egestas metus.
        
    //     Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 1, '2021-03-11T17:25:27Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Mystery Men', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 2, '2021-09-05T17:25:35Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Good Hair', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2021-11-03T17:59:54Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Nobody Knows (Dare mo shiranai)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
    //     Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
    //     Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 2, '2021-03-11T21:52:18Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Fog Over Frisco', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 2, '2021-03-16T11:54:24Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Final Cut, The', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', 2, '2021-04-14T14:13:17Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('So Proudly We Hail!', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
        
    //     Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
        
    //     Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 2, '2021-11-14T11:58:47Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Breaking the Silence: Truth and Lies in the War on Terror', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
    //     Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2, '2021-02-24T19:13:51Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Round Up, The (La Rafle)', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 1, '2021-08-17T18:42:36Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Carbon Nation', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
        
    //     In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
        
    //     Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 1, '2021-12-18T20:04:25Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Let''s Go to Prison', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.
        
    //     Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
        
    //     Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 2, '2021-10-13T22:13:31Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Immigrants (L.A. Dolce Vita)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
        
    //     Sed ante. Vivamus tortor. Duis mattis egestas metus.', 1, '2021-08-24T17:33:27Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Kisses', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        
    //     Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.
        
    //     Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 2, '2021-07-16T12:16:57Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Gabriel Over the White House', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 1, '2021-06-22T22:01:16Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Stakeout on Dope Street', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', 1, '2021-09-23T04:18:00Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Mosaic', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 1, '2022-01-04T11:34:03Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('In Old Chicago', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
    //     Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 2, '2021-02-27T05:00:47Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Godzilla vs. Biollante (Gojira vs. Biorante) ', 'In congue. Etiam justo. Etiam pretium iaculis justo.
        
    //     In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 2, '2021-12-06T23:43:36Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Brothers at War', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 1, '2022-01-04T18:12:07Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Nightmare Alley', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
    //     Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 2, '2021-05-28T02:40:13Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Arrested Development Documentary Project, The', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
        
    //     Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 2, '2021-08-16T22:07:45Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Year of Living Dangerously, The', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
        
    //     In congue. Etiam justo. Etiam pretium iaculis justo.
        
    //     In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 2, '2021-04-29T00:58:43Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Rich and Famous', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
        
    //     Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2, '2021-08-04T12:43:30Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Sneakers', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
        
    //     Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
        
    //     Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 1, '2021-05-17T10:17:05Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Toy Soldiers', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2021-10-22T19:17:01Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Primary Colors', 'Fusce consequat. Nulla nisl. Nunc nisl.
        
    //     Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 2, '2021-05-27T01:39:54Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Gunfighters', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
        
    //     Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2021-09-14T17:58:44Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Bastards (Les salauds)', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 1, '2022-01-23T17:58:32Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Human Failure (Menschliches Versagen)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
        
    //     Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.
        
    //     Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 2, '2021-05-27T11:59:02Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Who Is Harry Kellerman and Why Is He Saying Those Terrible Things About Me?', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 1, '2021-05-06T21:55:07Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Middle Men', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.
        
    //     Fusce consequat. Nulla nisl. Nunc nisl.
        
    //     Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', 2, '2021-04-22T09:42:00Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Greatest Show on Earth, The', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 2, '2021-05-11T16:22:08Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Client List, The', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
        
    //     Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 2, '2021-04-30T02:37:19Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Hipnos', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
        
    //     Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
        
    //     Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 1, '2021-08-20T02:16:46Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Goodbye Again', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
        
    //     Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 1, '2021-05-05T06:41:49Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Cold Steel', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
        
    //     In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
        
    //     Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 2, '2021-09-18T18:59:39Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Secret of Roan Inish, The', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.
        
    //     Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
        
    //     Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 1, '2021-03-08T00:21:55Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Rhapsody in August (Hachi-gatsu no kyôshikyoku)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
        
    //     Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 2, '2021-06-10T16:32:24Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('King Kong vs. Godzilla (Kingukongu tai Gojira)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 2, '2022-01-14T18:52:18Z');
    //     insert into post (title, text, "creatorId", "createdAt") values ('Erkan & Stefan 2', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.
        
    //     Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 2, '2021-03-15T21:48:47Z'); 
    // `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
