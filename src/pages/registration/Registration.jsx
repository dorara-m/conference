import Layout from "../../components/Layout/Layout";
import Section from "../../components/section/section";
import styles from "./Registration.module.scss";

export default function Registration() {
  return (
    <Layout>
      <Section heading="Registration fees">
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Regular (super early)</td>
              <td>25,000 JPY</td>
              <td>March 1 - May 31</td>
            </tr>
            <tr>
              <td>Regular (early)</td>
              <td>30,000 JPY</td>
              <td>June 1 - July 31</td>
            </tr>
            <tr>
              <td>Regular (late)</td>
              <td>35,000 JPY</td>
              <td>August 1 - September 30 (participation only)</td>
            </tr>
            <tr>
              <td>Student (super early)</td>
              <td>8,000 JPY</td>
              <td>March 1 - May 31</td>
            </tr>
            <tr>
              <td>Student (early)</td>
              <td>10,000 JPY</td>
              <td>June 1 - July 31</td>
            </tr>
            <tr>
              <td>Student (late)</td>
              <td>12,000 JPY</td>
              <td>August 1 - September 30 (participation only)</td>
            </tr>
            <tr>
              <td>Accompany person</td>
              <td>10,000 JPY</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <div className={styles.tableCaption}>*All-inclusive</div>
      </Section>
    </Layout>
  );
}
