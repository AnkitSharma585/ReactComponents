import Accordion from '../Components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'cdsf',
      title:
        'Quidem magni eius, quibusdam tempora officiis voluptatum provident?',
      content:
        'soluta nihil, vitae fugit doloribus dolor temporibus, accusamus id tenetur? Provident minima corrupti deleniti vel facilis hic excepturi velit sequi nobis aliquam.',
    },
    {
      id: 'wefsd',
      title:
        'voluptatibus odio ut quibusdam nihil quaerat! Mollitia modi placeat?',
      content:
        'Itaque totam earum eos dolorum fuga quam, mollitia excepturi repudiandae optio necessitatibus culpa debitis laboriosam officiis odit autem quis fugit! Corporis minima voluptatum quod nisi nobis quasi rerum velit rem.',
    },
    {
      id: 'mhjg',
      title: 'Aut, quis! Nam nemo ipsa ex amet, iste, eveniet sequi, nisi?',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.labore. Facere possimus eum iusto consequuntur, asperiores accusamus obcaecati, doloremque similique neque maiores dolores? Soluta illum cupiditate error hic quidem animi.',
    },
  ];
  return <Accordion items={items} />;
}
export default AccordionPage;
