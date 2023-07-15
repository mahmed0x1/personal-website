import Navigation from "@/components/navigation";

import styles from "./page.module.css";

export default function Blog({ params }: { params: { slug: string } }) {
  return (
    <div className={styles.root}>
      <Navigation active="blog" />
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.image_container}>
            <div className={styles.image}></div>
          </div>
          <div className={styles.article_header}>
            <h1>How to code Mobile Apps Using JavaScript</h1>
            <span>Added on: 2023/03/08</span>
          </div>
          <div className={styles.categories}>
            <div className={styles.category}>JavaScript</div>
            <div className={styles.category}>Mobile Development</div>
          </div>
          <article>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque pretium pulvinar tempus. Curabitur eget cursus nulla.
            Aenean porttitor nec massa sed pellentesque. Mauris mauris tellus,
            vestibulum sit amet dolor eget, efficitur pellentesque lectus.
            Pellentesque sagittis maximus massa. Ut tempor et mauris a
            ultricies. Nulla pulvinar fringilla lacus, vel egestas sem. Donec
            quis porta justo, sed pulvinar enim. Aliquam consequat justo eget
            tellus iaculis aliquet non sed mi. Aenean lacus magna, elementum
            vitae iaculis ut, tincidunt quis tellus. Phasellus gravida in ante
            pharetra elementum. Curabitur in velit dictum, congue nisl ac,
            lobortis arcu. Fusce interdum enim ac mi sagittis venenatis. Nunc
            vitae facilisis sapien. Phasellus mattis quam eget sollicitudin
            suscipit. Vestibulum mattis nibh ut sapien consectetur imperdiet.
            Aenean ornare urna et enim pharetra congue. Phasellus pretium lectus
            a vestibulum suscipit. Aenean sagittis odio nunc, ac maximus ante
            commodo non. Nam commodo blandit leo eu imperdiet. Fusce accumsan
            venenatis sem id bibendum. In pulvinar consectetur massa. Quisque
            rutrum velit ultrices dolor feugiat tincidunt. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Sed eget mi in ante imperdiet commodo. Sed gravida tempor semper.
            Morbi bibendum mauris ac nunc tristique rutrum. Suspendisse ipsum
            ipsum, molestie non facilisis et, sagittis egestas sapien. Nunc
            semper libero mauris, vel vehicula urna consectetur ut. Cras non
            ultrices neque, at facilisis tellus. Donec venenatis nunc vel
            fringilla commodo. Aliquam ac velit enim. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Ut id turpis nulla. Nunc
            vehicula magna imperdiet lorem egestas, vel tristique erat lobortis.
            Nullam maximus, est eget lacinia euismod, sem nibh facilisis lectus,
            a condimentum tellus mauris tincidunt tortor. Aenean consequat
            fringilla ipsum. Morbi euismod finibus ante, eget pellentesque urna
            pharetra condimentum. Suspendisse tempus felis ipsum, non faucibus
            est iaculis quis. Nullam at sapien ut sapien interdum vestibulum.
            Nullam at felis blandit, congue orci non, fringilla dui. Donec
            commodo vulputate ipsum ut aliquet. Nulla id eleifend quam. Nam in
            ligula tellus. Integer quis libero vel risus aliquet pharetra. Donec
            egestas risus nec enim iaculis, in convallis odio semper. Etiam eu
            sem finibus, ornare nisi et, placerat dui.
          </article>
        </div>
      </div>
    </div>
  );
}
