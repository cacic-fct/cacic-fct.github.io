import styles from './styles.module.css';

export default function LightBgTable(): JSX.Element {
  return (
    <table className={styles.colorTable}>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Cor em hex</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Fundo</td>
          <td>
            <span
              className={styles.color}
              style={{ backgroundColor: '#000000' }}></span>{' '}
            <code>#000000</code>
          </td>
        </tr>
        <tr>
          <td>Texto</td>
          <td>
            <span
              className={styles.color}
              style={{ backgroundColor: '#000000' }}></span>{' '}
            <code>#000000</code>
          </td>
        </tr>
        <tr>
          <td>Logotipo</td>
          <td>
            <span
              className={styles.color}
              style={{ backgroundColor: '#000000' }}></span>{' '}
            <code>#000000</code>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
